import React, { Component } from 'react';
import { Grid, Icon, Container, Image } from 'semantic-ui-react';

class Skills extends Component {
    render(){

        const headerMargin = {
            marginLeft: '300px'
        }

        const iconSize = {
            fontSize: '10em'
        }
        return(
            <div>
                <h1 style={headerMargin}>Skills</h1>
                <br></br>
                <Container>
                    <Grid relaxed columns={5}>
                        <Grid.Column>
                            <Image src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src="https://image.flaticon.com/icons/png/512/1183/1183672.png" />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Ruby_on_Rails_logo.svg" />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" />
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        ) 
    }
}

export default Skills