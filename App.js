import Expo from "expo";
import React from 'react';
import App from './js/App';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.tff"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.tff"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.tff")
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        return <App />;
    }
}

