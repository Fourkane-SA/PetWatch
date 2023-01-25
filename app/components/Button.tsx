import {ButtonProps, StyleSheet, TouchableOpacity, Text} from "react-native";

// @ts-ignore
export const Button = ({ onPress, text }: ButtonProps) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
    },
});
