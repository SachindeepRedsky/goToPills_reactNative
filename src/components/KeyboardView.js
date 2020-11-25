import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
type Props = {
    style?: object;
    children?: any;
    isLoading?: boolean | false;
    behavior?: any;
};

export default class KeyboardView extends Component<Props> {
    render() {
        if (Platform.OS == 'android') {
            return <View 
            style={this.props.style}>{this.props.children}</View>;
        } else {
        return (
            <KeyboardAvoidingView
                behavior={this.props.behavior}
                style={this.props.style}
                keyboardVerticalOffset={Platform.OS == "ios" ? 50 : 22}
                enabled={Platform.OS === "ios" ? true : false}>
                {this.props.children}
            </KeyboardAvoidingView>
        );
        }
    }
}
