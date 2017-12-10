import React, { Component } from "react";
import { View } from 'react-native';

import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Item,
    Label,
    Input,
    Body,
    Left,
    Right,
    Icon,
    Form,
    Text
} from "native-base";
import * as Secrets from './../../Secrets';

import styles from "./signInStyles";

class SignInView extends Component {

    constructor() {
        super();
        this.state = {
            passcodeInput: ""
        }

        this.updatePasscode = this.updatePasscode.bind(this);
    }

    verifySignIn = () => {
        if (this.state.passcodeInput === Secrets.passcode) {
            this.props.navigation.navigate('MasterView');
        }
    }


    updatePasscode = (text) => {
        this.setState({ passcodeInput: text });
    }

    render() {
        return (

            <Container style={styles.container}>
                <View style={styles.content}>

                    <Form>
                        <Item floatingLabel last>
                            <Label>Passcode</Label>
                            <Input value={this.state.passcodeInput} onChangeText={this.updatePasscode} />
                        </Item>
                        <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.verifySignIn}>
                            <Text >Sign In</Text>
                        </Button>
                    </Form>
                </View>
            </Container>
        );
    }
}

export default SignInView;