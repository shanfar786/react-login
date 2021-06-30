import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/Navbar'
import { Button } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav'
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"


export default function Header() {
  const { logout } = useAuth()
  const history = useHistory()
 

  async function handleLogout() {
    await logout()
    history.push("/login")
  } 

   
    return (
        <>
          <Navbar bg="light" expand="lg" >
            
            <Navbar.Brand href="#home">
              Admin Panel
            </Navbar.Brand>
           <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="/Formdetails">Form</Nav.Link>
      {/* {error && <Alert variant="danger">{error}</Alert>} */}
      <Nav className="ml-auto">
            <Button variant="light" onClick={handleLogout}>
          Log Out
        </Button></Nav>
        
          </Navbar>
        </>
      );
    
  }