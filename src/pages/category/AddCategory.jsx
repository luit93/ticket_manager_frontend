import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/PageBreadcrumb'
import AddCategoryForm from '../../components/forms/AddCategoryForm'
const initialFormData = {
    category:'',
    description:'',
    image:null
}

const AddCategory = () => {
    const [formData, setFormData] = useState(initialFormData)
    useEffect(()=>{},[formData])
    const handleOnChange = e =>{
        const {name,value}= e.target
        setFormData({
            ...formData,
            [name]:value
        })
        console.log(name, value)
    }
    const handleOnSubmit = async (e) =>{
        e.preventDefault()
       
       
        console.log("form submission request",formData)
    }
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Add Category"/>
            </Col>
        </Row>
        <Row>
            <Col>
          <AddCategoryForm handleOnChange={handleOnChange} formData={formData} handleOnSubmit={handleOnSubmit}/>
            </Col>
        </Row>
    </Container>
  )
}

export default AddCategory