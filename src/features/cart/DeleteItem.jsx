import { useDispatch } from 'react-redux'
import { DelItem } from './cartSlice';
import Button from '../../ui/Button';

export default function DeleteItem({pizzaId}) {

    const dispatch=useDispatch();

    return (
        <Button type="small" onClick={()=>{
            dispatch(DelItem(pizzaId));
        }} >Delete</Button>
    )
}
