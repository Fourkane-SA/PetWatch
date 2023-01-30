import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, SafeAreaView } from 'react-native';

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
                    <Pressable key={item.id} style={styles.blocRadioItem}  onPress={() => setUserOption(item.value)}>
                        <View style={[styles.before, item.value === userOption ? styles.beforeSelected : styles.beforeUnselected]} >
                            <View style={[styles.after, item.value === userOption ? styles.afterSelected : styles.afterUnselected]}></View>
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
        borderColor: 'blue'
    },
    beforeUnselected: {
        borderColor: '#bbb',
    },
    afterSelected: {
        backgroundColor: 'blue',
    },
    afterUnselected: {
        backgroundColor: '#bbb',
    },
});