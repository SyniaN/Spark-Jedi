import React from 'react';
import { Root } from 'native-base';
import { StackNavigator } from "react-navigation";
import { View } from 'react-native';

import MasterView from "./components/MasterView";
import DetailView from "./components/DetailView";

const AppNavigator = StackNavigator(
    {
        MasterView: { screen: MasterView },
        DetailView: { screen: DetailView }
    }, {
        initialRouteName: "MasterView",
        headerMode: "none"
    }
)

export default () =>
    <Root>
        <AppNavigator />
    </Root>
