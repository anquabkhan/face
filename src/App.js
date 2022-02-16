import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from "react-tsparticles"
import FaceRecognition from './components/FaceRecognition/FaceRecogniton';
// import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register.js'



const initialState ={
      input: '',
      imageurl: '',
      box: {} ,
      route: 'signin',
      isSignedIn: false,
      user: {
        email: "",
        entries: "",
        id: "125",
        joined: "",
        name: "",
        password: ""
  }
}
class App extends Component {
  constructor(){
    super()
    this.state ={
      input: '',
      imageurl: '',
      box: {} ,
      route: 'signin',
      isSignedIn: false,
      user: {
        email: "",
        entries: "",
        id: "125",
        joined: "",
        name: "",
        password: ""
      }

    }
  }

  // componentDidMount(){
  //   fetch("http://localhost:3000")
  //   .then(resp => resp.json())
  //   .then( console.log )
  // }
  loadUser = ( curruser ) => {
    console.log("inside load user")
    this.setState({
      user: {
        id: curruser.id,
        email: curruser.email,
        entries: curruser.entries,
        joined: curruser.joined,
        name: curruser.name,
        password: curruser.password
      }

    })
  }


  OnrouteChange = ( path ) => {
    if (path === 'signout'){
      this.setState(initialState)
    } else if (path === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: path})
  }

  FaceLocation = (response) => {
    const face = response.outputs[0].data.regions[0].region_info.bounding_box ;
    console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
    const image = document.getElementById('inputimage')
    const width = Number(image.width) 
    const height = Number(image.height) 
    console.log('width',width)
    console.log('height',height) 
    // console.log(face.left_col) 

    return {
      leftcol: face.left_col * width , 
      rightcol: width - ((face.right_col) * width) , 
      toprow: (face.top_row) * height ,
      bottomrow: height - ((face.bottom_row)* height) ,
    } 
  }

  FaceBox = ( fbox ) => {
    this.setState({box: fbox}) ;
    console.log(fbox) ; 
  }

  onInputChange = (Event) => {
    console.log(Event.target.value)
    this.setState({input: Event.target.value})
   
  }
  // https://samples.clarifai.com/face-det.jpg
  onSubmit = (Event) => {
    console.log('click')
    this.setState({imageurl: this.state.input}) 
      fetch('https://murmuring-badlands-19847.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })   
    .then(response => response.json())
    .then( response => {
      if (response){
        fetch("https://murmuring-badlands-19847.herokuapp.com/image", {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id 
          })
        })
        .then(response => response.json())
        .then(count => {
          console.log("count is",count)
          this.setState(Object.assign(this.state.user, count))
        })
      }


      this.FaceBox(this.FaceLocation(response))
    }) 
    .catch( error => console.log(error))
    //   function(response){
    //     console.log(response.outputs[0].data.regions[0].region_info)
    //     this.FaceLocation() ;

    //   },
    //   function(err){
    //     console.log("Error occured",err)
    //   }
    // );

  }
  
  render(){
          const particlesInit = (main) => {
            console.log(main);
        
            // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
          };
        
          const particlesLoaded = (container) => {
            console.log(container);
          };
          return(
            <div className="App">  
              {/* <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} /> */}
              
              < Navigation OnrouteChange={this.OnrouteChange} /> 
              { this.state.route === 'signin'  
                ? < SignIn OnrouteChange={this.OnrouteChange} loadUser={this.loadUser}/> 
                : ( this.state.route === 'home' 
                      ? <div> 
                          < Logo /> 
                          < Rank user={this.state.user}/>
                          < ImageLinkForm onInputChange= {this.onInputChange} onSubmit= {this.onSubmit} />              
                          <FaceRecognition box={ this.state.box } imageurl={ this.state.imageurl } />
                        </div> 
                      : < Register loadUser={this.loadUser}  OnrouteChange={this.OnrouteChange} />
                        
                  )
              } 
              
            </div>
          ) 
  }        
}


export default App ;
