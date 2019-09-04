import React, { Component } from 'react'
import { Sidebar, Image } from 'semantic-ui-react'

const imageSize = {
    width: '10%',
    height: '10%'
}

class Navbar extends Component {
    render(){
        return(
            <Sidebar>
                <Image style={imageSize} src="https://i.imgur.com/XvATqw6.jpg" circular />
            </Sidebar>
        )
    }
}

export default Navbar