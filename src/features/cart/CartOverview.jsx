import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import {formatCurrency} from "../../utils/helpers"

function CartOverview() {

  const totalCartPrice=useSelector(getTotalCartPrice);
  const TotalCartQuantity=useSelector(getTotalCartQuantity);

  if(!TotalCartQuantity) return null;

  console.log(TotalCartQuantity);
  return ( 
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-stone-200 text-sm sm:px-6 md:text-base">
      <p className=" space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span className="text-stone-300">{TotalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
