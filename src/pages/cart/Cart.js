import { useTitle } from "../../hooks/useTitle";
import { CartEmpty } from "./CartEmpty";
import { CartList } from "./CartList";
import { useCart } from "../../context/CartContext"

const Cart = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);


  return (
    <main>       
      { cartList.length ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}


export default Cart