import React, { Component } from 'react';
import { Divider, Icon, Grid, Segment, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class HeaderNavBar extends Component {
    render(){

        return(
            <div>
                <Grid style={{height: '230px'}}>
                    <Grid.Column width={1}>
                        <Segment.Group compact>
                            <Segment vertical textAlign='center'><Icon name="linkedin" size="large" /></Segment>
                            <Segment vertical textAlign='center'><Icon name="github" size="large" /></Segment>
                            <Segment vertical textAlign='center'><Icon name="facebook" size="large" /></Segment>
                            <Segment vertical textAlign='center'><Icon name="medium" size="large" /></Segment>
                        </Segment.Group>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Image src="https://i.imgur.com/ORGXDR2.png" size="small" centered />
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <Segment.Group floated='right'>
                            <Segment basic><h5>Home</h5></Segment>
                            <Segment basic><h5>Projects</h5></Segment>
                            <Segment basic><h5>Skills</h5></Segment>
                            <Segment basic><h5>Experience</h5></Segment>
                        </Segment.Group>
                    </Grid.Column>
                </Grid>
                <Divider />
            </div>
        )
    }
}

export default HeaderNavBar