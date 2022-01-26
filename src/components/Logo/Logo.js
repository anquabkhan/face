import React , { Component } from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import Brain_icon from './Brain_icon.png' ;
import brain2 from './brain2.png';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2 " options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> 
                    <img  alt="image not found" src={ Brain_icon } />
                </div>
            </Tilt>
        </div>
    )
}
export default Logo








