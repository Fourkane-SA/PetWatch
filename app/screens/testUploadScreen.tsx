import {Component} from "react";
import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import Upload from "../components/Upload";

export default class TestUploadScreen extends Component {

    state = {
        url1: '',
        url2: ''
    }
    render() {
        return (
            <SafeAreaView style={styles.content}>
                <View style={styles.upload}>
                    <Upload onImageUrlChange={(imageUrl) => {this.setState({url1: imageUrl})}} />
                    <Text>Upload 1 : {this.state.url1}</Text>
                    {this.state.url1 !== undefined && <Image source={{uri: this.state.url1}} style={styles.images} />}
                </View>
                <View style={styles.upload}>
                    <Upload onImageUrlChange={(imageUrl) => { this.setState({url2: imageUrl})}} />
                    <Text>Upload 2 : {this.state.url2}</Text>
                    {this.state.url2 !== undefined && <Image source={{uri: this.state.url2}} style={styles.images}/>}
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        alignItems: "center",
        alignContent: "center",
        flex: 1,
        margin: 5
    },
    upload: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    images: {
        width: 100,
        height: 100
    }
})
