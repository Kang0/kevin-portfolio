import React, { Component } from 'react'
import { Sidebar, Image, Menu } from 'semantic-ui-react'

const imageSize = {
    width: '7%',
    borderRadius: '50%',
    margin: '20px'
}

const sidebarMarginFont = {
    margin: '20px',
    fontFamily: 'Raleway'
}

class Navbar extends Component {
    render(){
        return(
            <Sidebar
                as={Menu}
                animation='push'
                visible
                width="thin"
            >
                <Image style={imageSize} src="https://i.imgur.com/msfHhhH.jpg" />
                <h1 style={sidebarMarginFont}>Kevin Kang</h1>
            </Sidebar>
        )
    }
}

export default Navbar