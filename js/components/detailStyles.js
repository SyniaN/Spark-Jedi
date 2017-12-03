const React = require("react-native");

const { StyleSheet } = React;

export default {
    container: {
        backgroundColor: "#FFF"
    },
    text: {
        alignSelf: "center",
        marginBottom: 7
    },
    topViewImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null
    },
    topViewText: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        padding: 15
    },
    topView: {
        backgroundColor: "red",
        width: "100%",
        height: 200,
        marginBottom: 15,
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderWidth: 2,
        borderColor: "ghostwhite",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 10
    },
    section: {
        marginBottom: 10
    },
    details: {
        paddingLeft: 20,
        paddingRight: 20
    },
    button: {
        marginBottom: 15
    }
};