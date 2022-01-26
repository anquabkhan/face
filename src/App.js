import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from "react-tsparticles"
import FaceRecognition from './components/FaceRecognition/FaceRecogniton';
// import Particles from 'react-particles-js';
class App extends Component {
  constructor(){
    super();
    this.state ={
      input: '',
      imageurl: '',

    }
  }

  onInputChange = (Event) => {
    console.log(Event.target.value)
    this.setState({input: Event.target.value})
  }

  onSubmit = (Event) => {
    console.log('click')
    this.setState({imageurl: this.state.input})

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
              
              < Navigation /> 
              < Logo /> 
              < Rank />
              < ImageLinkForm onInputChange= {this.onInputChange} onSubmit= {this.onSubmit} />              
              <FaceRecognition imageurl={this.state.imageurl}/>
               
            </div>
          ) 
  }        
}


export default App ;
