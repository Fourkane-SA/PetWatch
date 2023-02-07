import React, { useState, useEffect, Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';


const data = [
    { id: 1, name: 'Chlamydiose' },
    { id: 2, name: 'Coryza' },
    { id: 3, name: 'Hépatite de Rubarth' },
    { id: 4, name: 'Leucose' },
    { id: 5, name: 'Leptospirose' },
    { id: 6, name: 'Maladie de Carré ' },
    { id: 7, name: 'Parvovirose' },
    { id: 8, name: 'Piroplasmose' },
    { id: 9, name: 'Rage' },
    { id: 10, name: 'Toux du chenil' },
    { id: 11, name: 'Typhus des chats' },
];

type Props = {
    onChange
}

export default class MultipleSelect extends Component<Props> {
    

    onSelectedItemsChange = (selectedItems: any[]) => {
        let names = []
        for (let i = 0; i < selectedItems.length; i++) {
            const tempItem = data.find(item => item.id === selectedItems[i]);
            names.push(tempItem.name)
        }
        this.setState({selectedItems: selectedItems}, () => this.props.onChange(names))

    }

    state = {
        selectedItems: []
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.MainContainer}>
                    <MultiSelect
                        hideTags
                        items={data}
                        uniqueKey="id"
                        onSelectedItemsChange={this.onSelectedItemsChange}
                        selectedItems={this.state.selectedItems}
                        selectText="Selectionnez les vaccins"
                        searchInputPlaceholderText="Chercher un vaccin"
                        onChangeInput={(text) => console.log(text)}
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="#CCC"
                        selectedItemTextColor="#CCC"
                        selectedItemIconColor="#CCC"
                        itemTextColor="#000"
                        displayKey="name"
                        searchInputStyle={{ color: '#CCC' }}
                        submitButtonColor="#00BFA5"
                        submitButtonText="Submit"
                    />
                </View>
            </SafeAreaView>
        )
    }
    
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        padding: 12,
        backgroundColor: 'white',
        width: '90%',
        minHeight: 50,
    },

    text: {
        padding: 12,
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
    }
});
