import React, { Component } from "react";
import {
    StyleSheet,
    View,
} from 'react-native';

import ArtistBox from "./ArtistBox"

export default class ArtistDetailView extends Component {

    render() {
        const artist = this.props.artist
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: 'lightgray',
                paddingTop: 0,
            }
        });

        return (
            <View style={StyleSheet.container}>
                <ArtistBox artist={artist}/>
            </View>
        );
    }
}