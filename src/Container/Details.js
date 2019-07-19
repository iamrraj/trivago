import React, { Component } from 'react'
import axios from 'axios';
import './Details.css';
import { Row ,Container,Col, Carousel,Card} from 'react-bootstrap'
const ReactMarkdown = require('react-markdown/with-html')

// import Service from './Service';

// const service = new Service();

class Details extends Component {
    constructor(props){
        super(props);

        this.state = {
            question: null,
          };
    }

    // async componentDidMount() {
    //     const { match: { params } } = this.props;
    //     const question = (await axios.get(params.uri)).data;
    //     console.log(question)
    //     this.setState({
    //         question
    //     });
    //  }



    // componentDidMount() {
    //     // const { match: { params } } = this.props; 
    //     axios.get(this.props.uri)
    //       .then(res => {
    //         const info = res.data;
    //         console.log(info);
    //         this.setState({ info });
    //       })
          
    //   }

  

  //   componentDidMount(){
  //   const { match: { params } } = this.props;

  //     axios.get(params.uri).then((res)=>{
  //       const question = res.data[0]['uri'];
  //       axios.get(question).then((qRes) => {
  //         console.log(qRes); //will return the data from the second uri
  //       })
  //       console.log(question);
  //       this.setState({ question });
  //     })

  // }
  
  componentDidMount() {
    axios.get(`http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/dornoch-castle-scotland-whisky.json`)
      .then(res => {
        const question = res.data;
        console.log(res);
        this.setState({ question });
      })
      
  }
   
  

    render() {
        const {question} = this.state;

        if (question === null) return <p>Loading ...</p>;
        return (
            <div>
                 <div>
                   
                   
                      <img className="img-fluid rounded mb-4" src={question.thumbnail.url} alt="" style={{ height: "550px", width: "100%"}} />
                 </div>
            <Container>
                <Row >

                  <Col sm={8}>
                  <h4 style={{ opacity:"0.6" }}>{question.taxonomies.destinations[0].name}
                  <span style={{float:"right"}}>{question.date}</span>
                  </h4>
                  <br></br>
                    <h1>{question.title}</h1><br></br>
                    <h3 style={{ opacity: "0.4"}}>{question.excerpt}</h3>
                     
<br></br>
{/* This is For array 0 */}

                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif"}}><ReactMarkdown  source = { question.content[0].text } escapeHtml={false}  /></h5>
{/* This is For array 1 */}
                    <h2 style={{ textDecoration:"underline", textTransform:"capitalize"}}>{question.content[1].type}</h2>
                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif"}}><ReactMarkdown  source = { question.content[1].text } escapeHtml={false}  /></h5>

{/* This is For array 2 */}
                    <h2 style={{ textDecoration:"underline", textTransform:"capitalize"}}>{question.content[2].type}</h2>
                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif" }} ><ReactMarkdown  source = { question.content[2].content } escapeHtml={false}  /></h5>


{/* This is For array 3 */}

                    <h2 style={{ textDecoration:"underline", textTransform:"capitalize"}}>{question.content[3].title}</h2>
                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif", }}><ReactMarkdown  source = { question.content[3].text } escapeHtml={false}  /></h5>

                    <h2 style={{ textDecoration:"underline", textTransform:"capitalize"}}>{question.content[3].blocks[0].title}</h2>
                    <h4 style={{ opacity:"0.6", textTransform:"capitalize"}}>{question.content[3].blocks[0].tips[0].title}</h4>
                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif", }}><ReactMarkdown  source = { question.content[3].blocks[0].tips[0].description } escapeHtml={false}  /></h5>



                    <Carousel bg="info">
                      <Carousel.Item>
                    <a href="# " target="_blank" style={{ textDecoration: "none", color:"black" }}>
                      <center>
                      <Card  >
                      <img className="img-fluid rounded mb-4" src={question.content[3].blocks[1].posts[0].thumbnail_url} alt={question.content[3].blocks[1].posts[0].alt} 
                      style={{ height: "400px", width:"100%"}}
                      />
                        <Card.Body>
                         <Card.Title>{question.content[3].blocks[1].posts[0].taxonomies.destinations[0].name}</Card.Title>
                          <Card.Text style={{ fontSize: "30px"}}>
                         {question.content[3].blocks[1].posts[0].card_title}
                          </Card.Text>
                        </Card.Body>
                      </Card></center></a>
                      </Carousel.Item>

                      <Carousel.Item>
                      <a href="# " target="_blank" style={{ textDecoration: "none", color:"black" }}>
                     <center>
                      <Card >
                      <img className="img-fluid rounded mb-4" src={question.content[3].blocks[1].posts[1].thumbnail_url} alt={question.content[3].blocks[1].posts[1].alt}
                      style={{ height: "400px", width: "100%"}}
                      />
                        <Card.Body>
                          <Card.Title>{question.content[3].blocks[1].posts[1].taxonomies.destinations[0].name}</Card.Title>
                          <Card.Text style={{ fontSize: "30px"}}>
                          {question.content[3].blocks[1].posts[1].card_title}
                          </Card.Text>
                        </Card.Body>
                      </Card></center></a>
                      </Carousel.Item>

                      
                     <Carousel.Item>
                     <a href="# " target="_blank" style={{ textDecoration: "none", color:"black" }}>
                     <center>
                      <Card >
                        <img className="img-fluid rounded mb-4" src={question.content[3].blocks[1].posts[2].thumbnail_url} alt={question.content[3].blocks[1].posts[2].alt} 
                        style={{ height: "400px", width:"100%"}}
                         />
                        <Card.Body>
                          <Card.Title>{question.content[3].blocks[1].posts[2].taxonomies.destinations[0].name}</Card.Title>
                          <Card.Text style={{ fontSize: "30px"}}>
                          {question.content[3].blocks[1].posts[2].card_title}
                          </Card.Text>
                        </Card.Body>
                      </Card></center></a>
                      </Carousel.Item>
                    </Carousel>


                   

{/* This is For array 4 */}

                    <h2 style={{ textDecoration:"underline", textTransform:"capitalize"}}>{question.content[4].title}</h2>
                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif", }}><ReactMarkdown  source = { question.content[4].text } escapeHtml={false}  /></h5>

                    <h2 style={{ textDecoration:"underline", textTransform:"capitalize"}}>{question.content[4].blocks[0].title}</h2>
                    <h4 style={{ opacity:"0.6", textTransform:"capitalize"}}>{question.content[4].blocks[0].tips[0].title}</h4>
                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif", }}><ReactMarkdown  source = { question.content[4].blocks[0].tips[0].description } escapeHtml={false}  /></h5>
                    <h5><ReactMarkdown  source = { question.content[4].blocks[1].image.courtesy } escapeHtml={false}  /></h5>
                    <img className="img-fluid rounded mb-4" src={question.content[4].blocks[1].image.url} alt ={question.content[4].blocks[1].image.alt} style={{ height: "550px", width: "100%"}} />
                    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[4].blocks[1].image.title}</p>

 {/* This is for array 5 */}

                    <h2 style={{ textDecoration:"underline", textTransform:"capitalize"}}>{question.content[5].title}</h2>
                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif", }}><ReactMarkdown  source = { question.content[5].text } escapeHtml={false}  /></h5>

                    <h4 style={{ opacity:"0.7", textTransform:"capitalize"}}>{question.content[5].blocks[0].title}</h4>
                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif", }}><ReactMarkdown  source = { question.content[5].blocks[0].message} escapeHtml={false}  /></h5>

                    <h5><ReactMarkdown  source = { question.content[5].blocks[1].image.courtesy } escapeHtml={false}  /></h5>
                    <img className="img-fluid rounded mb-4" src={question.content[5].blocks[1].image.url} alt ={question.content[5].blocks[1].image.alt}  height={question.content[6].blocks[0].image.height} width={question.content[6].blocks[0].image.width} />
                    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[5].blocks[1].image.title}</p>
 
{/* This is for array 6 */}
                    <h2 style={{ textDecoration:"underline", textTransform:"capitalize"}}>{question.content[6].title}</h2>
                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif", }}><ReactMarkdown  source = { question.content[6].text } escapeHtml={false}  /></h5>
                    
                    <img className="img-fluid rounded mb-4" src={question.content[6].blocks[0].image.url} alt ={question.content[6].blocks[0].image.alt} height={question.content[6].blocks[0].image.height} width={question.content[6].blocks[0].image.width}   />
                    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[6].blocks[0].image.title}</p>

                    <h5><ReactMarkdown  source = { question.content[6].blocks[1].text } escapeHtml={false}  /></h5>

                     <img className="img-fluid rounded mb-4" src={question.content[6].blocks[2].image.url} alt ={question.content[6].blocks[2].image.alt} height={question.content[6].blocks[2].image.height} width={question.content[6].blocks[2].image.width}   />
                    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[6].blocks[2].image.title}</p>


{/* This is array 7 */}

                    <h2 style={{ textDecoration:"underline", textTransform:"capitalize"}}>{question.content[7].title}</h2>
                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif", }}><ReactMarkdown  source = { question.content[7].text } escapeHtml={false}  /></h5>


                    <h4 style={{ opacity:"0.6", textTransform:"capitalize"}}>{question.content[7].blocks[0].title}</h4>
                    <h4 style={{ opacity:"0.6", textTransform:"capitalize"}}>{question.content[7].blocks[0].tips[0].title}</h4>
                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif", }}><ReactMarkdown  source = { question.content[7].blocks[0].tips[0].description } escapeHtml={false}  /></h5>
                    
                    <img className="img-fluid rounded mb-4" src={question.content[7].blocks[1].image.url} alt ={question.content[7].blocks[1].image.alt} height={question.content[7].blocks[1].image.height} width={question.content[7].blocks[1].image.width}   />
                    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[7].blocks[1].image.title}</p>

                    <h5><ReactMarkdown  source = { question.content[7].blocks[2].text } escapeHtml={false}  /></h5>

                     <img className="img-fluid rounded mb-4" src={question.content[7].blocks[3].image.url} alt ={question.content[7].blocks[3].image.alt} height={question.content[7].blocks[3].image.height} width={question.content[7].blocks[3].image.width}   />
                    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[7].blocks[3].image.title}</p>

{/* This is array 8 */}

                    <h2 style={{ textDecoration:"underline", textTransform:"capitalize"}}>{question.content[8].title}</h2>
                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif", }}><ReactMarkdown  source = { question.content[8].text } escapeHtml={false}  /></h5>

                    <img className="img-fluid rounded mb-4" src={question.content[8].blocks[0].image.url} alt ={question.content[8].blocks[0].image.alt} height={question.content[8].blocks[0].image.height} width={question.content[8].blocks[0].image.width}   />
                    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[8].blocks[0].image.title}</p>

{/* This is array 9 */}
                    <h2 style={{ textDecoration:"underline", textTransform:"capitalize"}}>{question.content[9].title}</h2>
                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif", }}><ReactMarkdown  source = { question.content[10].text } escapeHtml={false}  /></h5>

                  
{/* This is array 10 */}

                    <h2 style={{ textDecoration:"underline", textTransform:"capitalize"}}>{question.content[10].title}</h2>
                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif", }}><ReactMarkdown  source = { question.content[10].text } escapeHtml={false}  /></h5>

                    <img className="img-fluid rounded mb-4" src={question.content[10].blocks[0].image.url} alt ={question.content[10].blocks[0].image.alt} height={question.content[10].blocks[0].image.height} width={question.content[10].blocks[0].image.width}   />
                    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[10].blocks[0].image.title}</p>

                    <h5><ReactMarkdown  source = { question.content[10].blocks[1].text } escapeHtml={false}  /></h5>

                     <img className="img-fluid rounded mb-4" src={question.content[10].blocks[2].image.url} alt ={question.content[10].blocks[2].image.alt} height={question.content[10].blocks[2].image.height} width={question.content[10].blocks[2].image.width}   />
                    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[10].blocks[2].image.title}</p>

{/* This is array 11 */}


                    <h2 style={{ textDecoration:"underline", textTransform:"capitalize"}}>{question.content[11].title}</h2>
                    <h5 style={{ fontFamily:"Arial, Helvetica, sans-serif", }}><ReactMarkdown  source = { question.content[11].text } escapeHtml={false}  /></h5>

                    <img className="img-fluid rounded mb-4" src={question.content[11].blocks[0].image.url} alt ={question.content[11].blocks[0].image.alt} height={question.content[11].blocks[0].image.height} width={question.content[11].blocks[0].image.width}   />
                    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[11].blocks[0].image.title}</p>

                    <h5><ReactMarkdown  source = { question.content[11].blocks[1].text } escapeHtml={false}  /></h5>

{/* This is array 12 */}

                    <h2 style={{ textDecoration:"underline", textTransform:"capitalize"}} id="hotel" >{question.content[12].title}</h2>

 

{/* 
 This si for Array 14
                  <h5><ReactMarkdown  source = { question.content[14].text } escapeHtml={false}  /></h5> */}




   <Carousel >
  <Carousel.Item>
  <img className="img-fluid rounded mb-4" src={question.content[12].gallery[0].url} alt ={question.content[12].gallery[0].alt}  height={question.content[12].gallery[0].height} width={question.content[12].gallery[0].width} />
    <Carousel.Caption>
    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[12].gallery[0].title}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="img-fluid rounded mb-4" src={question.content[12].gallery[1].url} alt ={question.content[12].gallery[1].alt}  height={question.content[12].gallery[1].height} width={question.content[12].gallery[1].width} />

    <Carousel.Caption>
    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[12].gallery[0].title}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="img-fluid rounded mb-4" src={question.content[12].gallery[2].url} alt ={question.content[12].gallery[2].alt}  height={question.content[12].gallery[2].height} width={question.content[12].gallery[2].width}  />
    <Carousel.Caption>
    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[12].gallery[2].title}</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <img className="img-fluid rounded mb-4" src={question.content[15].courtesy_list_contents[0].url} alt ={question.content[15].courtesy_list_contents[0].alt}  height={question.content[15].courtesy_list_contents[0].height} width={question.content[15].courtesy_list_contents[0].width}  />
    <Carousel.Caption>
    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[15].courtesy_list_contents[0].title}</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
  <img className="img-fluid rounded mb-4" src={question.content[15].courtesy_list_contents[2].url} alt ={question.content[15].courtesy_list_contents[2].alt}  height={question.content[15].courtesy_list_contents[2].height} width={question.content[15].courtesy_list_contents[2].width}  />
    <Carousel.Caption>
    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[15].courtesy_list_contents[2].title}</p>
    </Carousel.Caption>
  </Carousel.Item>
 
  <Carousel.Item>
  <img className="img-fluid rounded mb-4" src={question.content[15].courtesy_list_contents[3].url} alt ={question.content[15].courtesy_list_contents[3].alt}  height={question.content[15].courtesy_list_contents[3].height} width={question.content[15].courtesy_list_contents[3].width}  />
    <Carousel.Caption>
    <p style={{ opacity:"1", textTransform:"capitalize"}}>{question.content[15].courtesy_list_contents[3].title}</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>

<h5><ReactMarkdown  source = { question.content[12].blocks[0].text } escapeHtml={false}  /></h5>




                 </Col>


                  <Col sm={3}>
                    
                   
                       <img className="img-fluid rounded mb-4" src={question.author.image} alt="" style={{ height:"50px", width:"50px", borderRadius:"50px"}} />
                   
                       <span>{question.author.name}</span><br></br>
                       
                       <div>
                         <a href={question.author.social_networks.facebook} target="_blank" className=" fa fa-facebook"></a>
                          <a href={question.author.social_networks.instagram } target="_blank" className="fa fa-instagram"></a>
                          <a href={question.author.social_networks.pinterest} target="_blank" className="fa fa-pinterest"></a>
                          <a href={question.author.social_networks.twitter} target="_blank" className="fa fa-twitter"></a>
                       </div><br></br>

                       <p>Skip to the Hotel </p>
                       <a href="#hotel">1. Hotel { question.content[13].table_of_contents[10].hotel_module.name }3 <i className="fa fa-star" style={{ color:"gold"}}></i> </a>

                       <Card style= {{ width:"23rem",top: "93%" }}>
                        <Card.Body>
                          <Card.Title>Hotel { question.content[13].table_of_contents[10].hotel_module.name } </Card.Title>
                          <br></br>
                          <Card.Subtitle className="mb-2 text-muted">
                            <span style={{ background:"green", color:"white", padding:"7px" }}>8.9</span> &nbsp; &nbsp;
                            <span>{ question.content[13].table_of_contents[10].hotel_module.ratingText }({ question.content[13].table_of_contents[10].hotel_module.ratingCount})</span>
                            </Card.Subtitle>
                            <br></br>
                          <Card.Subtitle>
                            { question.content[13].table_of_contents[10].hotel_module.rating_aspects.aspect_text } {question.content[13].table_of_contents[10].hotel_module.rating_aspects.aspect_name}&nbsp;&nbsp; {question.content[13].table_of_contents[10].hotel_module.rating_aspects.aspect_rating_percentage}/100
                          </Card.Subtitle>
<br></br>
                          <Card.Subtitle>
                            <p>
                              <i className="fa fa-product-hunt"></i>  {question.content[13].table_of_contents[10].hotel_module.tags[0].tag_name}&nbsp; &nbsp;&nbsp; &nbsp; 
                              <i className="fa fa-product-hunt"></i>  {question.content[13].table_of_contents[10].hotel_module.tags[1].tag_name}
                              </p>

                          
                              <p><i className="fa fa-wifi"></i> {question.content[13].table_of_contents[10].hotel_module.tags[2].tag_name}&nbsp; &nbsp;&nbsp; &nbsp; 
                              <i className="fa fa-wifi"></i>  {question.content[13].table_of_contents[10].hotel_module.tags[3].tag_name}</p>
 
                            
                          
                          </Card.Subtitle>
                          <Card.Link href={question.content[13].table_of_contents[10].hotel_module.homePageURL} target="_blank" style={{ background:"green", padding:"10px", color:"white"}}>View Price<i className="fa fa-arrow-right"></i> </Card.Link>
                        </Card.Body>
                      </Card>
                    
                  </Col>




                </Row>
            </Container>



            </div>
        )
    }
}

export default Details;