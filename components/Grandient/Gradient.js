import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

export default function Gradient({ children, styleCustom }) {
    return (
        <LinearGradient
        colors={["#FE5D97", "#FF5757"]}
        style={[styles.grad, styleCustom]}
        >
        {children}
        </LinearGradient>
    );
    } 
const styles = StyleSheet.create({
    grad: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})