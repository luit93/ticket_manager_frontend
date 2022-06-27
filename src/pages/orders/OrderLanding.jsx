import React from 'react'
import orderData from "../../assets/data/order-data.json"
import PurchaseTable from '../../components/tables/PurchaseTable'
const OrderLanding = ({orderId}) => {
  return (
    <div>OrderLanding
      <hr/>
      <PurchaseTable/>
    </div>
  )
}

export default OrderLanding