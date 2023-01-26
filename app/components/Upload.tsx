import React, { Component } from 'react';
import {
    Image, Pressable, SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import axios from "axios/index";
import Svg, {Path} from "react-native-svg";



class Props {
    onImageUrlChange
}

export default class Upload extends Component<Props> {
    state = {
        image: null,
        uploading: false,
        imageUrl: ''
    };

    render() {
        return (
                <View>
                    <Pressable style={styles.content} onPress={this._pickImage}>
                        <Text>Importer depuis la Galerie</Text>
                        <Svg width="37" height="47" viewBox="0 0 37 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M10.3333 0L0 10.3333H7.75V28.4167H12.9167V10.3333H20.6667M28.4167 36.1667V18.0833H23.25V36.1667H15.5L25.8333 46.5L36.1667 36.1667H28.4167Z" fill="black"/>
                        </Svg>
                    </Pressable>
                </View>
        )
    }

    _pickImage = async () => {
        const {
            status: cameraRollPerm
        } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (cameraRollPerm === 'granted') {
            let pickerResult = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                base64: true,
                aspect: [4, 3],
            });
            if (!pickerResult.cancelled) {
                await this.uploadImageAsync(pickerResult.uri);
                this.setState({ image: pickerResult.uri}, () => {
                    this.props.onImageUrlChange(this.state.imageUrl)
                });
            }
        }
    };

    async uploadImageAsync(pictureuri) {
        var data = new FormData();
        data.append('image', {
            uri: pictureuri,
            name: 'file',
            type: 'image/jpg'
        })

        const url = (await  axios.post('/uploadImage', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })).data
        this.setState({imageUrl : url})
    }

}

const styles = StyleSheet.create({
    content: {
        alignItems: "center",
        borderStyle: "dashed",
        borderColor: '#FAD4D4',
        borderWidth: 4,
        borderRadius: 4,
        padding: 10,
        width: '80%',

    }
});
