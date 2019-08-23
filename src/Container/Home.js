import React, { Component } from 'react'
// import axios from 'axios';
import { Row ,Container,Col,Card,Button,ListGroup,Carousel} from 'react-bootstrap'



class Home extends Component {
    constructor(props){
        super(props);

        this.state ={
          movies: [],

        };
    }


    // componentDidMount() {
    //     axios.get(`http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/latest_posts.json`)
    //       .then(res => {
    //         const info = res.data;
    //         console.log(res);
    //         this.setState({ info });
    //       })
          
    //   }

    async componentDidMount() {
      try {
        const res = await fetch('http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/latest_posts.json');
        const movies = await res.json();
        console.log(movies);
        this.setState({
          movies: movies.results,
        });
      } catch (e) {
        console.log(e);
      }
    }
  
    render() {
        return (
 <div>         
          <Carousel >
          <Carousel.Item>
          <img className="img-fluid rounded mb-4" src="https://cdn-image.travelandleisure.com/sites/default/files/1556556186/bora-bora-overwater-bungalows-ALISTBUCKET0419.jpg"  alt ="Just " style={{height:"600px", width:"100%"}} />
            <Carousel.Caption>
            <p style={{ opacity:"1", textTransform:"capitalize",fontSize:"30px", fontWeight:"bolder"}}>Dornoch Castle: A Whisky Tasting at One of the World's Most Popular Hotel Bars</p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
<Container>
      <Row>
 {this.state.movies.map( c => 
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
                <a href={ c.slug} >    <Button variant="info">See Details >> </Button></a> 
              </Card.Body>
         
        </Card>
      </Col>

 )} 
        </Row>
      </Container> 
      </div>  


       
        )
    }
}

export default Home;
