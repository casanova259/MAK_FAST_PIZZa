import { useDispatch, useSelector } from 'react-redux'
import Button from '../../ui/Button'
import { DecreaseItemQuantity, getCurrQuantity, IncreaseItemQuantity } from './cartSlice';

export default function UpdateCartQuantity({ pizzaId }) {

    const dispatch = useDispatch();
    const currentQuantity=useSelector(getCurrQuantity(pizzaId));
    return (
        <div className='flex gap-1 items-center md:gap-3'>
            <Button type="round" onClick={() => {
                dispatch(DecreaseItemQuantity(pizzaId));
            }}>-</Button>
            <span className="text-sm font-medium">{currentQuantity}</span>
            <Button type="round" onClick={() => {
                dispatch(IncreaseItemQuantity(pizzaId));
            }}>+</Button>
        </div>

    )
}
