import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, SafeAreaView } from 'react-native';

/* Futur essai pour la modal de filtre  : distance et prix  */ 

export default function RadioButton({ data, onSelect }) {
    const [userOption, setUserOption] = useState(null);

    const selectHandler = (value) => {
        onSelect(value);
        this.setUserOption(value);
    };

    return (
        <SafeAreaView style={styles.blocRadioGroup}>
            {data.map((item) => {
                return (
                    <Pressable key={item.id} style={styles.blocRadioItem} onPress={() => setUserOption(item.value)} >
                        <View style={[styles.before, item.value === userOption ? styles.beforeSelected : styles.beforeUnselected]} >
                        </View>
                        
                        <Text> {item.value}</Text>
                    </Pressable>
                );
            })}
            {/* <Text> User option: {userOption}</Text> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    blocRadioGroup: {
        flexDirection: 'row',
        marginBottom: 40,
        width: '100%',
    },
    blocRadioItem: {
        width: '12%',
        marginRight: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    before: {
        backgroundColor: 'transparent',
        width: 18,
        height: 18,
        borderRadius: 50,
        marginBottom: 20,
    },
    beforeSelected: {
        backgroundColor: '#000',
        borderColor: '#000',
    },
    beforeUnselected: {
        backgroundColor: 'transparent',
    },
});