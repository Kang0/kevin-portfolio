import React, { Component } from 'react';
import { Divider, Icon, Grid, Segment, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class HeaderNavBar extends Component {
    render(){
        return(
            <>
                <Grid celled='internally'>
                    <Grid.Column width={1}>
                        <Segment vertical><Icon name="linkedin" size="large" /></Segment>
                        <Segment vertical><Icon name="github" size="large" /></Segment>
                        <Segment vertical><Icon name="facebook" size="large" /></Segment>
                        <Segment vertical><Icon name="medium" size="large" /></Segment>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Image src="https://i.imgur.com/KkUwuQx.png" size="medium" centered />
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <Segment vertical><h5>Home</h5></Segment>
                        <Segment vertical><h5>Projects</h5></Segment>
                        <Segment vertical><h5>Skills</h5></Segment>
                        <Segment vertical><h5>Experience</h5></Segment>
                    </Grid.Column>
                </Grid>
                <Divider />
            </>
        )
    }
}

export default HeaderNavBar