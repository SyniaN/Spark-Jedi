import React from 'react';
import { Root } from 'native-base';
import { StackNavigator } from "react-navigation";
import { View } from 'react-native';

import MasterView from "./components/MasterView";
import DetailView from "./components/DetailView";
import SignInView from "./components/SignInView";

const AppNavigator = StackNavigator(
    {
        SignInView: { screen: SignInView },
        MasterView: { screen: MasterView },
        DetailView: { screen: DetailView }
    }, {
        initialRouteName: "SignInView",
        headerMode: "none"
    }
)

export default () =>
    <Root>
        <AppNavigator />
    </Root>
