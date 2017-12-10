import React, { Component } from 'react';
import Profiles from "../Profiles";
import styles from './masterStyles';

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
    Right,
    Item,
    Input
} from "native-base";

export default class MasterView extends Component {

    constructor() {
        super();
        this.state = {
            showSearch: false,
            searchTerm: ""
        }

        this.showSearch = this.showSearch.bind(this);
        this.hideSearch = this.hideSearch.bind(this);
        this.inputSearchTerm = this.inputSearchTerm.bind(this);
    }

    showSearch = () => {
        this.setState({ showSearch: true });
    }

    hideSearch = () => {
        this.setState({ showSearch: false, searchTerm: "" });
    }

    inputSearchTerm = (text) => {
        this.setState({ searchTerm: text })
    }

    render() {
        const nav = this.props.navigation.navigate;
        const filteredProfiles = Profiles.filter(p => {
            return this.state.searchTerm === "" ? p : p.Name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        });
        return (
            <Container style={styles.container}>
                <Header searchBar rounded >

                    {this.state.showSearch &&
                        <Item>
                            <Icon active name="search" />
                            <Input placeholder="Search" onChangeText={this.inputSearchTerm} />
                            <Button transparent onPress={this.hideSearch}>
                                <Icon active name="close" />
                            </Button>
                        </Item>
                    }

                    {!this.state.showSearch &&
                        <Left>
                            <Icon name="people" />
                        </Left>
                    }

                    {!this.state.showSearch &&
                        <Body>
                            <Title>Spark Jedi</Title>
                        </Body>
                    }

                    {!this.state.showSearch &&
                        <Right>
                            <Button transparent onPress={this.showSearch}>
                                <Icon name="search" />
                            </Button>
                        </Right>
                    }

                </Header>

                <Content>
                    <List
                        dataArray={filteredProfiles}
                        renderRow={(Profile, SectionID, RowID) =>
                            <ListItem style={styles.listItem} thumbnail onPress={() => nav('DetailView', { Profile })}>
                                <Left>
                                    <Thumbnail circular size={55} source={Profile.img} />
                                </Left>
                                <Body>
                                    <Text>{Profile.Name}</Text>
                                    <Text numberOfLines={2} note>{Profile.Why}</Text>
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