import React, { Component } from 'react'
import { Sidebar, Image } from 'semantic-ui-react'

const imageSize = {
    width: '7%',
    borderRadius: '50%',
    margin: '20px'
}

class Navbar extends Component {
    render(){
        return(
            <Sidebar>
                <Image style={imageSize} src="https://i.imgur.com/msfHhhH.jpg" />
            </Sidebar>
        )
    }
}

export default Navbar