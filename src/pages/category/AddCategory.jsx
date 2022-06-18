import React from 'react'
import { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/PageBreadcrumb'
import AddCategoryForm from '../../components/forms/AddCategoryForm'
const initialFormdata = {
    category:'',
    description:'',
    image:null
}
const AddCategory = () => {
    const [formData, setFormData] = useState(initialFormdata)
    const handleOnChange = e =>{
        const {name,value}= e.target
        setFormData({
            ...initialFormdata,
            [name]:value
        })
        console.log(name, value)
    }
    const handleOnSubmit =e =>{
        e.preventDefault()
        console.log("form submission request")
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