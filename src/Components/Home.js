import React, { Component } from 'react';
import { Image, Grid} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

class Home extends Component {
    render(){

        const homeFont = {
            fontFamily: 'Merriweather',
            fontSize: '4em',
            marginTop: '10vh'
        }

        return(
            <div style={{height: '100vh'}}>
                <Grid textAlign='center'>
                    <Grid.Row>
                        <Image src="/portfolio-header.png" size="medium" />
                    </Grid.Row>
                    <Grid.Row>
                        <h1 style={homeFont}>My name is Kevin Kang</h1>
                    </Grid.Row>
                    <Grid.Row>
                        <h1 style={homeFont}>Front-End Web developer</h1>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Home