import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "unstated";
import { Route,Switch} from 'react-router-dom'
import {  Navbar, Nav } from 'react-bootstrap';
import  Home  from './Container/Home'
import Details from './Container/Details'
import './App.css';

const BaseLayout = () => (

<div>
<Navbar bg="info" expand="lg">
  <Navbar.Brand href="#"> <img src="https://raw.githubusercontent.com/jinfull/trivago-magazine/master/src/assets/hamburger.png" alt="side" style={{ height:"20px"}}></img> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="/"><img src="https://raw.githubusercontent.com/jinfull/trivago-magazine/master/src/assets/trivago-logo.png" alt="trivago" style={{ height:"60px", width:"150px"}}></img></Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

  <div>
        <Provider>
        
            <Switch>

             <Route path="/" exact component={Home} />
             <Route path='/:slug' component={Details} />
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
