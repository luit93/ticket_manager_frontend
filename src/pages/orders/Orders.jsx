import React from 'react'
import { Container, Row,Col,Button } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/PageBreadcrumb'
import SearchForm from '../../components/forms/SearchForm'
import orderData from "../../assets/data/order-data.json"
import { useState } from 'react'
import { useEffect } from 'react'
import OrderTable from '../../components/tables/OrderTable'

const Orders = () => {
    const [str,setStr]= useState(" ")
    const [ searchedOrderId,setSearchedOrderId] = useState(orderData)
    useEffect(()=>{},[str,searchedOrderId])
    const handleOnChange = e=>{
        const {value} = e.target
        setStr(value)
        searchOrder(value)
    }

    const searchOrder=(str)=>{
        const order = orderData.filter((row)=> row.orderId.toLowerCase().includes(str.toLowerCase()))
        setSearchedOrderId(order)
    }
    
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="orders"/>
            </Col>
            </Row>
            <Row className="button-search-row">
          
            <Col>
            <SearchForm handleOnChange={handleOnChange} str={str}/>
            </Col>
                
            </Row>
        <Row>
            <Col>
            <OrderTable orderData={searchedOrderId}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Orders