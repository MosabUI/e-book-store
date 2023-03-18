import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { OrderSuccess } from "./OrderSuccess";
import { OrderFail } from "./OrderFail";

export const OrderPage = () => {
  useTitle("Order Summary");
  const { state } = useLocation();
  

  return (
    <main>
      { state.status ? <OrderSuccess data={state.data} /> : <OrderFail /> }
    </main>
  )
}
