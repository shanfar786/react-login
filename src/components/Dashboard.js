import React from "react"
import Header from "./Header"
import { Card,Container } from "react-bootstrap"
import { Link } from "react-router-dom"
// import {  } from "react-bootstrap"
export default function Dashboard() {
 

  
  return (
    <>
    <Header />
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
       <Card>
        <Card.Body>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <h2 className="text-center mb-4">Dashboard</h2>
          
         
          <Link to="/formdetails" variant="light">
            Profile Form
          </Link><br />
          <Link to="/update-profile" variant="light">
          Update profile
          </Link><br />
          <Link to="/Forgot-password" variant="light">
           Forgot password
          </Link><br />
          {/* <Link to="/update-profile" variant="light">
            Update Profile
          </Link><br /> */}
          <Link to="/AdminPanel" variant="light">
          AdminPanel
          </Link>
          </div>

        </Card.Body>
      </Card> 
      </Container>
    </>
  )
}
