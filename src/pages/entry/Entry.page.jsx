import React,{useState} from 'react'
import "./entry.css"
import {Card} from 'react-bootstrap'
import Login from '../../components/login/Login.comp'
import ResetPass from '../../components/login/ResetPass.comp'
export const Entry = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [frmLoad,setFrmLoad]= useState('login')

    const handleOnChange= e =>{
        const {name,value} = e.target
        switch(name){
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
                default:
                    break
        }
    }
    const handleOnSubmit =e=>{
        e.preventDefault()
        if(!email || !password){
           return alert('fill all the blanks')
        }
        console.log(email,password)
        //call API for submitting form
    }
    const switchForm =(frmType)=>{
        setFrmLoad(frmType)
    }
  return (
    <div className="entry-page">
      <Card style={{ width: '19rem' }} className='form-box'>


    
  {frmLoad==='login' && <Login handleOnChange={handleOnChange} switchForm={switchForm} handleOnSubmit={handleOnSubmit} email={email} pass={password}/>
     }  
     {frmLoad==='reset' && <ResetPass handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} switchForm={switchForm} email={email}/>}
  
    

</Card>
       </div>
  )
}
