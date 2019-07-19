import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "unstated";
import { Route,Switch} from 'react-router-dom'
import {  Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap';
import  Home  from './Container/Home'
import Details from './Container/Details'
import './App.css';

const BaseLayout = () => (

<div>
<Navbar bg="info" expand="lg">
  <Navbar.Brand href="/">Trivago Magazine</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-danger">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

  <div>
        <Provider>
        
            <Switch>

              <Route path="/" exact component={Home} />
              <Route  path='/:slug' component={Details} />
              {/* <Route path="/LoginView" component={LoginView} /> */}
             
            </Switch>
          </Provider>
  </div>
<div style={{ background:"gray",height: "130px"}}>
  <h2 style={{color:"white", textAlign:"center",paddingTop:"25px" }}><strong>Trivago</strong> Magazine</h2>
  <h6 style={{color:"white",textAlign:"center"}}>Copyright © 2019 trivago | All rights reserved.</h6>
</div>
</div>

)

function App() {
  return (
    <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
      
    
  
  
  );
}

export default App;
