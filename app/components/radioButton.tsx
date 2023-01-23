import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function RadioButton({ data, onSelect }) {
    const [userOption, setUserOption] = useState(null);

    return (
        <View style={styles.blocRadioGroup}>
            {data.map((item) => {
                return (
                    <Pressable style={styles.blocRadioItem} onPress={() => setUserOption(item.value)}>
                        <View style={styles.radio}></View><Text> {item.value}</Text>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    blocRadioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
        width: '100%',
    },
    blocRadioItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radio: {
        backgroundColor: '#bbb',
        width: 15,
        height: 15,
        borderRadius: 50,
        marginRight: 5,
    }
});

// const Before = styled.button`
//   content : '';
// `;

// const After = styled.button`
// content : '';
// display: block;
// width: 15px;
// height: 15px;
// border-radius: 50px;
// background-color : grey;
// `;