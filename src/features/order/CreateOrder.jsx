import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { ClearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from '../cart/EmptyCart'
import { formatCurrency } from '../../utils/helpers'
import store from '../../store'
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );



function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  //to get data from the action we use another hook known as useActionData
  const formErrors = useActionData();
  const dispatch = useDispatch();
  const {username,status:addressStatus,position,address,error:errorAddress} = useSelector((state) => state.user);

  const isLoadingAddress=addressStatus==="loading";

  const cart = useSelector(getCart);

  const totalPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalPrice * 0.2 : 0;

  const totalOrderPrice = totalPrice + priorityPrice;

  if (cart.length === 0) return <EmptyCart />


  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>
      <Form method="POST">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input w-full" defaultValue={username} type="text" name="customer" required />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && <p className="text-xs mt-2 text-red-700 bg-red-100 p-2">{formErrors.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center relative ">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input className="input w-full" type="text" name="address" disabled={isLoadingAddress}
            defaultValue={address}
            required />
            {addressStatus==='error'&&(<p className="text-xs mt-2 text-red-700 bg-red-100 p-2">{errorAddress}</p>)}

            {!position.latitude&&!position.longitude&&<span className="absolute right-1 top-[3px] z-50 md:right-[5px] md:top-[5px]">
              <Button type="small" 
              disabled={isLoadingAddress}
              onClick={(e) => {
                e.preventDefault();
                dispatch(fetchAddress());
                }}>GET POSITION</Button>
            </span>}
          </div>
        </div>

        <div className="mb-12 items-center flex gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">Want to you give your order priority?</label>
        </div>

        <div >
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position" value={
            position.longitude&&position.latitude?
            `${
            position.latitude
          },${position.longitude}`:''}/>
          <Button
            type="primary"
            disabled={isSubmitting||isLoadingAddress}>{isSubmitting ? "Placing Order....." : `Order now For ${formatCurrency(totalOrderPrice)}`}</Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  //now the repsonse came should be converted to a new order object
  const data = Object.fromEntries(formData);
  console.log(data);

  //creating the new Order object to send it to the API
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true"
  };
  const errors = {};
  if (!isValidPhone(order.phone)) errors.phone = "Please Give Us Your Mobile Number through Which we can contact You For Your Order"

  //checking if there's an error so we stop and not create the new order
  if (Object.keys(errors).length > 0) return errors;


  const newOrder = await createOrder(order);
  store.dispatch(ClearCart());
  return redirect(`/order/${newOrder.id}`)
}


export default CreateOrder;
