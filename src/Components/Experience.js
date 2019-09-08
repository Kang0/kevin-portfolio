import React, { Component } from 'react';
import { Container, Grid, Icon, Segment } from 'semantic-ui-react'

class Experience extends Component {
    render(){

        const headerMargin = {
            marginLeft: '300px'
        }
        return(
            <>
                <h1 style={headerMargin}>Experience</h1>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Icon.Group size="huge">
                                    <Icon size="big" name='circle outline' />
                                    <Icon name="university" />
                                </Icon.Group>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Segment>
                                    Attended Flatiron School Web Development Program
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <p>Graduated 2019</p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Icon.Group size="huge">
                                    <Icon size="big" name='circle outline' />
                                    <Icon name="law" />
                                </Icon.Group>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Segment>
                                    Worked at Fragomen, Del Rey, Bernsen & Loewy for 4 years as a Client Coordinator
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <p>2015-2019</p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Icon.Group size="huge">
                                    <Icon size='big' name='circle outline' />
                                    <Icon name="university" />
                                </Icon.Group>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Segment>
                                    Attended Boston College - BA in Political Science & Communications
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <p>Graduated 2014</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </>
        )
    }
}

export default Experience