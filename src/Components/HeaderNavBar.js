import React, { Component } from 'react';
import { Divider, Icon, Grid, Segment } from 'semantic-ui-react'
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
                    <Grid.Column width={8}>

                    </Grid.Column>
                </Grid>
                <Divider />
            </>
        )
    }
}

export default HeaderNavBar