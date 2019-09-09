import React, { Component } from 'react';
import { Header, Image, Grid, Icon, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

class Home extends Component {
    render(){

        return(
            <div style={{height: '100vh'}}>
                <Grid textAlign='center'>
                    <Grid.Row>
                        <Image src="/portfolio-header.png" size="medium" />
                    </Grid.Row>
                    <Grid.Row>
                        <h1>My name is Kevin Kang</h1>
                    </Grid.Row>
                    <Grid.Row>
                        <h1>Front-End Web developer</h1>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Home