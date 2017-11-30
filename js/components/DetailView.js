import React, { Component } from "react";
import { View } from 'react-native';
import { NavigationActions } from 'react-navigation'



import {
    Container,
    Header,
    Body,
    Title,
    Content,
    Thumbnail,
    Left,
    Right,
    Button,
    Icon,
    Text,
    H1,
    H2,
    H3,
    Fab
} from "native-base";

export default class DetailView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    render() {
        console.log("rendering DetailView");
        const backAction = NavigationActions.back();
        const { Profile } = this.props.navigation.state.params;
        return (
            <Container>
                <Header>
                    <Left>

                        <Button transparent>
                            <Icon name='arrow-back'
                                onPress={() => this.props.navigation.dispatch(backAction)} />
                        </Button>
                    </Left>

                    <Body>
                        <Title>
                            {Profile.Name}
                        </Title>
                    </Body>
                    <Right />
                </Header>

                <Content >
                    <View>
                        <View>
                            <Thumbnail large source={Profile.img} />
                        </View>
                        <View style={{ flex: 3 }}>
                            <H2>Your Why?</H2>
                            <Text note> {Profile.Why} </Text>
                            <H2>Interests</H2>
                            <Text note>{Profile.Interests} </Text>
                            <H2>Memorable Experience</H2>
                            <Text note> {Profile.MemorableExp}</Text>
                            <H2>Inspirational Quote</H2>
                            <Text note> {Profile.Quote} </Text>
                            <H2>Inspired By</H2>
                            <Text note> {Profile.Inspiration} </Text>
                            <H2>Languages</H2>
                            <Text note> {Profile.Languages} </Text>
                        </View>
                        <Fab
                            active={this.state.active}
                            direction="up"
                            containerStyle={{}}
                            style={{ backgroundColor: '#5067FF' }}
                            position="bottomRight"
                            onPress={() => this.setState({ active: !this.state.active })}>
                            <Icon name="share" />
                            <Button style={{ backgroundColor: '#34A34F' }}>
                                <Icon name="logo-whatsapp" />
                            </Button>
                            <Button style={{ backgroundColor: '#3B5998' }}>
                                <Icon name="logo-facebook" />
                            </Button>
                            <Button disabled style={{ backgroundColor: '#DD5144' }}>
                                <Icon name="mail" />
                            </Button>
                        </Fab>
                    </View>
                </Content >
            </Container >
        )
    }
}