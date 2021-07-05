import React , { useState ,loader} from "react"
 import { Form, Button, Card } from "react-bootstrap"
import { Container } from "react-bootstrap"
import Header from "./Header"
import { db } from "../firebase";


const Formdetails= () => {
  
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");
  const [loader,setLoader] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    

    db.collection("contacts")
      .add({
        name: name,
        phonenumber: phonenumber,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setPhonenumber("");
    setMessage("");
  };

  return (

    <>
    <Header />
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
    
    <Form onSubmit={handleSubmit}>
    <h1>Contact Us </h1>
  <Form.Group controlId="formBasicname">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name"  value={name}
        onChange={(e) => setName(e.target.value)}/>
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="Number" placeholder="Enter your phonenumber"  value={phonenumber}
        onChange={(e) => setPhonenumber(e.target.value)}/>

<Form.Label>Message</Form.Label>
<Form.Control size="lg" type="text" placeholder="sample text" value={message}
        onChange={(e) => setMessage(e.target.value)}/>
    </Form.Group>

      <Button
        type="submit"
        variant="primary">
        Submit
      </Button>
    </Form>
    
    </Card.Body>
    </Card>
    </div>
    </Container>
    </>
  );
}

export default Formdetails;