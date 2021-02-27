//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


// create a component
class PhotoSection extends Component {
    state={
        heartIcon: 'ios-heart-empty',
        like:false
    }

    toggleLike=()=>{
       this.setState({
           like:!this.state.like
       })
       if(this.state.like){
           this.setState({
               heartIcon:'ios-heart'
           })
       }else{
        this.setState({
            heartIcon:'ios-heart-empty'
        })
       }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.username}>
                    {this.props.detail.name.toUpperCase()}
                </Text>
                <View>
                    <Image style={styles.imageStyle} source={{uri: `https://pokeres.bastionbot.org/images/pokemon/${this.props.index+1}.png`}} />
                </View>

                <View style={styles.heartContainer}>
                    <TouchableWithoutFeedback onPress={this.toggleLike} >
                        <Icon name={this.state.heartIcon} size={30} style={{color:this.state.heartIcon === "ios-heart-empty" ? 'black' :'red',paddingHorizontal:5}}/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

// define your styles
const styles =  StyleSheet.create({
    container: {
      margin:5,
      backgroundColor:'#fff',
    },
    imageStyle:{width:250,height:250, borderRadius:10,alignSelf:'center'},
    username:{
        fontWeight:'bold',
        paddingRight:10,
        fontFamily:"",
        fontSize: 18,
        alignSelf: 'center',
        marginBottom:10,
        fontStyle:'italic',
        textDecorationLine:'underline'
    },
    heartContainer:{
        paddingTop:10,
        paddingBottom:10,
        flexDirection:"row"
    }
});

//make this component available to the app
export default PhotoSection;
