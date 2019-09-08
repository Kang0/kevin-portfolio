import React, { Component } from 'react';
import { Header, Image, Grid, Icon, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

class Home extends Component {
    render(){

        const headerMargin = {
            marginLeft: '300px'
        }

        const imageMargin = {
            marginLeft: '25vh'
        }

        const textMargin = {
            marginLeft: '300px',
            fontSize: '6em'
        }

        return(
            <div style={{marginTop: '30vh'}}>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column width={4}>
                            <Image src="https://i.imgur.com/msfHhhH.jpg" circular size="medium" style={imageMargin} />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <h1 style={textMargin}>I'm Kevin Kang</h1>
                            <br></br>
                            <h2 style={textMargin}>Fullstack Web Developer</h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column centered style={{marginTop: '11vh'}}>
                            <Container textAlign='center'>
                                <Icon name="angle double down" size="massive" textAlign="center" />
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Home