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
                    <Grid.Column width={3}>
                            <Icon name="linkedin" size="large" />
                            <Icon name="github" size="large" />
                            <Icon name="facebook" size="large" />
                            <Icon name="medium" size="large" />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Image src="https://i.imgur.com/ORGXDR2.png" centered size="medium" fluid />
                    </Grid.Column>
                    <Grid.Column width={3} align="right">
                        <p>Home // Skills // Projects // Experience</p>
                    </Grid.Column>
                </Grid>
                <Divider />
            </Container>
        )
    }
}

export default HeaderNavBar