//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Heading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to PokeDex</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection:"row",
        alignItems: 'center',
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
        height:"10%",
        backgroundColor:'red'
    },
    text:{
        fontSize:25,
        fontFamily: "",
        fontWeight:'bold',
        marginTop:25,
        color:'yellow'
    }
});


export default Heading;
