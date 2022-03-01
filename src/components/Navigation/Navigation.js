import React , { component } from 'react'

const Navigation = ({ OnrouteChange }) => {
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'   }} onClick={() => OnrouteChange('signin')}>
            <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    )
}

export default Navigation




 