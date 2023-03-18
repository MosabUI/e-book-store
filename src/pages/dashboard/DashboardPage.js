import { useState, useEffect } from "react";
import { useTitle } from "../../hooks/useTitle";
import { getUserOrders } from "../../services/dataService";
import { DashboardCard } from "./DashboardCard";
import { DashboardEmpty } from "./DashboardEmpty";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  useTitle("Dashboard");


  useEffect(()=>{
    const getOrders =async ()=>{
      
        const data = await getUserOrders()
        setOrders(data)
    }
    getOrders()
},[])
 

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>

      <section>
        { orders.length && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        )) }
      </section>

      <section>
        { !orders.length && <DashboardEmpty /> }
      </section>

    </main>
  )
}
