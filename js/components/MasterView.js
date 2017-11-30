import React, { Component } from 'react';
import Profiles from "../Profiles";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    List,
    ListItem,
    Text,
    Thumbnail,
    Left,
    Body,
    Right
} from "native-base";

export default class MasterView extends Component {
    render() {
        const nav = this.props.navigation.navigate;

        console.log("rendering Master view");
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Spark Jedi</Title>
                    </Body>
                </Header>

                <Content>
                    <List
                        dataArray={Profiles}
                        renderRow={(Profile, SectionID, RowID) =>
                            <ListItem thumbnail onPress={() => nav('DetailView', { Profile })}>
                                <Left>
                                    <Thumbnail circular size={55} source={Profile.img} />
                                </Left>
                                <Body>
                                    <Text>{Profile.Name}</Text>
                                    <Text numberOfLines={2} note>{Profile["Your why?"]}</Text>
                                </Body>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>}
                    />
                </Content>
            </Container>
        );
    }
}