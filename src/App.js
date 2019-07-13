import React from 'react';
import { BrowserRouter } from 'react-router-dom'
// import { Route} from 'react-router-dom'
import { Provider } from "unstated";
import { Route,Switch} from 'react-router-dom'
import { NavDropdown, Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap';
import  Home  from './Container/Home'
import './App.css';

const BaseLayout = () => (

<div>
<Navbar bg="info" expand="lg">
  <Navbar.Brand href="#home">Trivago Magazine</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
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
              {/* <Route path="/LoginView" component={LoginView} /> */}
             
            </Switch>
          </Provider>
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
