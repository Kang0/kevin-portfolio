import React, { Component } from 'react';
import { Container, Card, Image } from 'semantic-ui-react';

class Projects extends Component {
    render(){

        const headerMargin = {
            marginLeft: '300px'
        }

        return(
            <>
                <h1 style={headerMargin}>Projects</h1>
                <Container>
                    <Card.Group itemsPerRow={3}>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>100 Days</Card.Header>
                                <Card.Meta>FrontEnd - React / BackEnd - Ruby on Rails</Card.Meta>
                                <Card.Description>
                                    User's create a challenges that they must complete everyday for 100 days. Helps build new habits and track progress.
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Record Your Records</Card.Header>
                                <Card.Meta>FrontEnd & Backend - Ruby on Rails</Card.Meta>
                                <Card.Description>
                                    User's create a challenges that they must complete everyday for 100 days. Helps build new habits and track progress.
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>CLI BBC Good Food Recipe</Card.Header>
                                <Card.Meta>FrontEnd & Backend - Ruby on Rails</Card.Meta>
                                <Card.Description>
                                    User's create a challenges that they must complete everyday for 100 days. Helps build new habits and track progress.
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Container>
            </>
        )
    }
}

export default Projects