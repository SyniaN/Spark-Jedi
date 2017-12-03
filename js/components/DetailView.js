import React, { Component } from "react";
import { View, Image, ImageBackground, Linking } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './detailStyles';

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
    Fab,
    Card,
    CardItem,
    IconNB
} from "native-base";

export default class DetailView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    openFeedBack = () => {
        Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdRSMx31ZQSH9VjxK0ihwnwLnRq7pB9Ndh_DoE8NRRRkKqzcQ/viewform')
    }
    openEmail = () => {
        Linking.openURL(`mailto:?subject=Coaching Session Request&body=Hi, I think you are awesome. Can we grab coffee sometime? My treat :D`)
    }
    render() {
        console.log("rendering DetailView");
        const backAction = NavigationActions.back();
        const { Profile } = this.props.navigation.state.params;
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.dispatch(backAction)}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body >
                        <Title>
                            {Profile.Name}
                        </Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style={styles.topView}>
                        <ImageBackground
                            style={styles.topViewImg}
                            source={require('../../img/colorfulBackground.jpg')}>
                            <View style={styles.topViewText}>
                                <View style={styles.circle}>
                                    <Thumbnail large source={Profile.img} />
                                </View>
                                <H3>{Profile.Name}</H3>
                                <Text>{Profile.Location}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.details}>
                        <View style={styles.section}>
                            <H3 >Your Why?</H3>
                            <Text note>{Profile.Why} </Text>
                        </View>
                        <View style={styles.section}>
                            <H3>Interests</H3>
                            <Text note>{Profile.Int}</Text>
                        </View>
                        <View style={styles.section}>
                            <H3 >Memorable Experience</H3>
                            <Text note>{Profile.MemorableExp}</Text>
                        </View>
                        <View style={styles.section}>
                            <H3 >Inspirational Quote</H3>
                            <Text note>{Profile.Quote}</Text>
                        </View>
                        <View style={styles.section}>
                            <H3 >Inspired By</H3>
                            <Text note>{Profile.Inspiration}</Text>
                        </View>
                        <View style={styles.section}>
                            <H3 >Languages</H3>
                            <Text note>{Profile.Languages}</Text>
                        </View>
                        <Button block info style={styles.button} onPress={this.openEmail}><Text>Contact Me</Text></Button>
                        <Button block warning style={styles.button} onPress={this.openFeedBack}><Text>Give Feedback</Text></Button>
                    </View>
                </Content >
            </Container >
        )
    }
}