import React, { Component } from 'react'
// import axios from 'axios';
import './Details.css';
import spinner from "../img/spinner-2.gif";

import { Row ,Container,Col, Carousel,Card} from 'react-bootstrap'
const ReactMarkdown = require('react-markdown/with-html')


class Details extends Component {
    constructor(props){
        super(props);

        this.state = {
            movie: null,
          };
    }



  async componentDidMount() {
    try {
      const res = await fetch(`http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/${this.props.match.params.slug}.json`);
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }
  
  // componentDidMount() {
  //   axios.get(`http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/dornoch-castle-scotland-whisky.json`)
  //     .then(res => {
  //       const question = res.data;
  //       console.log(res);
  //       this.setState({ question });
  //     })
      
  // }
   
  

    render() {
        const {movie} = this.state;
        


        if (movie === null) return <img
                    alt="loading"
                    src={spinner}
                    style={{ width: "500px", margin: "auto", display: "block" }}
                />

        let hotels = movie.content.filter(hotelObject => {
          if (hotelObject.type === 'hotel_module') {
            return hotelObject['hotel'];
          }
        });
    
        for (let i = 0; i < hotels.length; i++) {
          hotels[i] = (
            <a href={hotels[i]['hotel']['url']} target='_blank'>
              <li className='hotel-li' key={hotels[i]['hotel']['id']}>
                {i + 1}. {hotels[i]['hotel']['name']}
              </li>
            </a>
          )}

        

         
            
        return (
           <div>
             <img className="img-fluid rounded mb-4" src={movie.thumbnail.url} alt="" style={{ height: "535px", width: "100%"}} />
             <Container>
               <Row>
                 <Col sm={8} >
                    <h4 style={{ opacity:"0.6" }}>{movie.taxonomies.destinations[0].name}
                        <span style={{float:"right"}}>{movie.date}</span>
                    </h4>
<br></br>
                    <h1>{movie.title}</h1><br></br>
                    <h4 style={{ opacity: "0.4", textAlign:"justify"}}>{movie.excerpt}</h4>

                    {movie.content.slice(0,1).map(genre => (
                      <p key={genre.id} style={{ fontFamily:"Arial, Helvetica, sans-serif",fontSize:"20px" }} ><ReactMarkdown  source = { genre.text } escapeHtml={false}  /></p>
                    ))}

    
    {/* Hotel Image */}
                    <Carousel>
                    {movie.content[2].gallery.map(hote=>(
                      <Carousel.Item>
                      <a href="# " target="_blank" style={{ textDecoration: "none", color:"black" }}>
                      <center>
                      <Card >
                        <img className="img-fluid rounded mb-4" src={hote.url} alt={hote.alt} 
                            style={{ height: "400px", width:"100%"}}
                          />
                        
                      </Card></center></a>
                      </Carousel.Item>
                    ))}
                       </Carousel>

                       <br></br>

{/* Details Hotel Image */}
                  {movie.content[2].blocks.map(dhotel=>(
                    <p key={dhotel.id} style={{ fontFamily:"Arial, Helvetica, sans-serif",fontSize:"20px" }} ><ReactMarkdown  source = { dhotel.text } escapeHtml={false}  /></p>
                  ))}

                  
                 </Col>

                 <Col sm={4} >

                    <img className="img-fluid " src={movie.author.image} alt="" style={{ height:"50px", width:"50px",borderRadius:"50%"}} />
                        &nbsp; &nbsp; 
                    <span style={{ }}>{movie.author.name}</span><br></br><br></br>
                    <div>
                          <a href={movie.author.social_networks.facebook} rel="noopener noreferrer" target="_blank" className=" fa fa-facebook text-white"></a>
                          <a href={movie.author.social_networks.instagram } rel="noopener noreferrer" target="_blank" className="fa fa-instagram text-white"></a>
                          <a href={movie.author.social_networks.pinterest} rel="noopener noreferrer" target="_blank" className="fa fa-pinterest text-white"></a>
                          <a href={movie.author.social_networks.twitter} rel="noopener noreferrer" target="_blank" className="fa fa-twitter text-white"></a>
                       </div><br></br>

                    {hotels}
                   
                 </Col>
               </Row>
             </Container> 
           </div>
        )
    }
}

export default Details;