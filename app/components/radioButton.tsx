import React, {Component, useState} from 'react';
import { StyleSheet, View, Text, Pressable, SafeAreaView } from 'react-native';

type Props = {
    data
    onSelect
}

export default class RadioButton extends Component<Props> {

    state = {
        userOption: null
    }

    render() {
        return (
            <SafeAreaView style={styles.blocRadioGroup}>
                {this.props.data.map((item) => {
                    return (
                        <Pressable key={item.id} style={styles.blocRadioItem}  onPress={() => this.setState({userOption: item.value}, () => {this.props.onSelect(item.value)})}>
                            <View style={[styles.before, item.value === this.state.userOption ? styles.beforeSelected : styles.beforeUnselected]} >
                                <View style={[styles.after, item.value === this.state.userOption ? styles.afterSelected : styles.afterUnselected]}></View>
                            </View>

                            <Text> {item.value}</Text>
                        </Pressable>
                    );
                })}
                {/* <Text> User option: {userOption}</Text> */}
        </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    blocRadioGroup: {
        flexDirection: 'row',
        marginBottom: 40,
        width: '100%',
    },
    blocRadioItem: {
        flexDirection: 'row',
        width: '50%',
        marginRight: 25,
    },
    before: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        width: 18,
        height: 18,
        borderRadius: 50,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    after: {
        width: 10,
        height: 10,
        backgroundColor: '#bbb',
        borderRadius: 50

    },
    beforeSelected: {
        borderColor: '#FAD4D4'
    },
    beforeUnselected: {
        borderColor: '#bbb',
    },
    afterSelected: {
        backgroundColor: '#FAD4D4',
    },
    afterUnselected: {
        backgroundColor: '#bbb',
    },
});
