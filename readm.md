Why it's showing error (property 'protocol' of undefined)
I am able to read this JSON file but I am not able to read object URI JSON file. How can I use Object URI JSON File?

And this is the way I tried to read Uri JSON object

    class Details extends Component {
        constructor(props){
            super(props);
    
            this.state = {
                question: [],
              };
        }
     

  

     componentDidMount(){
          const { match: { params } } = this.props;
      
            axios.get(params.uri).then((res)=>{
              const question = res.data\[0\]\['uri'\];
              axios.get(question).then((qRes) => {
                console.log(qRes); //will return the data from the second uri
              })
              console.log(question);
              this.setState({ question });
            })
      
        }][1]


  [1]: https://i.stack.imgur.com/v2Nrk.png