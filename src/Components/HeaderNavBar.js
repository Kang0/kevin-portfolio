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
                <Grid style={{height: '5vh'}} padded>
                    <Grid.Column width={3}>
                            <Icon name="linkedin" size="large" />
                            <Icon name="github" size="large" />
                            <Icon name="facebook" size="large" />
                            <Icon name="medium" size="large" />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Image src="https://i.imgur.com/ORGXDR2.png" centered size="medium" />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <p>Home // Skills // Projects // Experience</p>
                    </Grid.Column>
                </Grid>
                <Divider />
            </div>
        )
    }
}

export default HeaderNavBar