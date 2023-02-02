import React, { Component } from 'react';
import {
    Dimensions,
    Image, Pressable, SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import axios from "axios/index";
import Svg, {Path} from "react-native-svg";
import IconDownload from '../assets/moduleSVG/downloadSVG'


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height



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
                <View style={styles.wrapper}>
                    <Pressable style={styles.gallery} onPress={this._pickImage}>
                        <Text style={styles.textGallery}>Importer depuis la Galerie</Text>
                        <IconDownload></IconDownload>
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
            if (!pickerResult.canceled) {
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
    wrapper: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    gallery: {
        alignItems: "center",
        borderStyle: "dashed",
        borderColor: '#FAD4D4',
        borderWidth: 3,
        borderRadius: 4,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        marginBottom: 30,
        justifyContent: 'center',
    },
    textGallery: {
        marginBottom: 15,
    },
});
