import React, { Component } from 'react'
// import Service from './Service';
import axios from 'axios';
// import {Link} from 'react-router-dom'
import { Row ,Container,Col,Card,Button,ListGroup} from 'react-bootstrap'

// const service = new Service();

class Home extends Component {
    constructor(props){
        super(props);

        this.state ={
            info: [],

        };
    }

    // componentDidMount(){
    //     var self = this;
    //     service.getInfos().then( (result) =>{
    //         console.log(result);
    //         self.setState({ data: {info:[]} })
    //     });
    // }

    componentDidMount() {
        axios.get(`http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/latest_posts.json`)
          .then(res => {
            const info = res.data;
            console.log(res);
            this.setState({ info });
          })
          
      }
  
    render() {
        return (
            

<Container>

<h1 className="mt-4 mb-3 text-white">Movie
      <small>List</small>
    </h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li className="breadcrumb-item active">Project</li>
    </ol>
    <img className="img-fluid rounded mb-4" src="http://placehold.it/1200x400" alt="">
    </img><hr className="hr"/>


  
      
      <Row>
 {this.state.info.map( c => 
      <Col sm={4} key={c.id} >
          
          {/* <Link to={"/project/" + c.pk} > */}
          <Card >
     
            <Card.Img variant="top" src={c.thumbnail_url} />
            <Card.Body>
              <Card.Title>{c.title}</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>{c.excerpt}</ListGroup.Item>
                </ListGroup>
                <Card.Title style={{ float:"right", fontSize: "15px" }}>{c.date}</Card.Title><br></br>
                <a href={"/details/" + c.title} >    <Button variant="info">See Details >> </Button></a> 
              </Card.Body>
         
        </Card>
      </Col>

 )} 
        </Row>


          
                            {/* // <td>
                // <button className="btn btn-danger"  onClick={(e)=> this.handleDelete(e,c.pk) }><i className="fa fa-trash" alt="Delete"></i></button> |
                // <a className="btn btn-success" href={"/customer/" + c.pk}><i className="fa fa-pencil"></i></a> 
                // </td> */}  
{/*  
      <hr className="hr"></hr>
      <center>
      <Button variant="primary" className="text-left" onClick= { this.nextPage }>Next</Button></center> */}
      </Container> 
      


       
        )
    }
}

export default Home
