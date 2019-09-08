import React, { Component } from 'react';
import { Divider, Icon, Grid, Segment, Image, Sticky } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class HeaderNavBar extends Component {
    render(){

        const dynamicImage = {
            maxWidth: '100%',
            height: 'auto',
        }

        return(
            <div>
                <Grid style={{height: '10vh'}} padded>
                    <Grid.Column width={1}>
                        <Segment.Group compact style={{height: '23vh'}}>
                            <Segment basic textAlign='center'><Icon name="linkedin" size="large" /></Segment>
                            <Segment basic textAlign='center'><Icon name="github" size="large" /></Segment>
                            <Segment basic textAlign='center'><Icon name="facebook" size="large" /></Segment>
                            <Segment basic textAlign='center'><Icon name="medium" size="large" /></Segment>
                        </Segment.Group>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Image src="https://i.imgur.com/ORGXDR2.png" centered size="medium" />
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <Segment.Group floated='right'>
                            <Segment basic><h5>Home</h5></Segment>
                            <Segment basic><h5>Projects</h5></Segment>
                            <Segment basic><h5>Skills</h5></Segment>
                            <Segment basic><h5>Experience</h5></Segment>
                            <Segment basic><h5>Contact</h5></Segment>
                        </Segment.Group>
                    </Grid.Column>
                </Grid>
                <Divider />
            </div>
        )
    }
}

export default HeaderNavBar