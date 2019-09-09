import React, { Component, createRef } from 'react';
import { Divider, Icon, Grid, Image, Sticky, Container, Ref } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class HeaderNavBar extends Component {
    contextRef = createRef()
    render(){

        const dynamicImage = {
            maxWidth: '100%',
            height: 'auto',
        }

        return(
            <Container fluid>
                <Grid style={{height: '5vh'}} padded>
                    <Grid.Column width={8}>
                            <Icon name="linkedin" size="large" />
                            <Icon name="github" size="large" />
                            <Icon name="facebook" size="large" />
                            <Icon name="medium" size="large" />
                    </Grid.Column>
                    <Grid.Column width={8} align="right">
                        <p>Home // Skills // Projects // Experience</p>
                    </Grid.Column>
                </Grid>
                <Divider />
            </Container>
        )
    }
}

export default HeaderNavBar