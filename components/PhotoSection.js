//import libraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet ,Image, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../actions";
import {Button} from "react-native-web";


// create a component
const PhotoSection = ({detail,key,index,array}) => {


    const loggedInUser = useSelector(
        (state) => state
    );
    // console.log(loggedInUser);
    const [like, setLike] = useState(false);
    const [heartIcon, setHeartIcon] = useState('ios-heart-empty');
    const [showReferInput, setShowReferInput] = useState(false);
    // const [arrayOfLikes,setArrayOfLikes] = useState([]);

    const dispatch = useDispatch();

    // const find = () => {
    //     console.log(arrayOfLikes);
    // }
    const toggleLike=(index)=>{

        console.log(index);
        // if (arrayOfLikes.includes(index)) {
        //     // console.log('hello');
        //     setArrayOfLikes(arrayOfLikes.filter(item => item !== index));
        // } else {
        //     // console.log('world');
        //     setArrayOfLikes([...arrayOfLikes, index]);
        // }



        if(like){
            setLike(false);
            setHeartIcon('ios-heart-empty');

        }else{
            setLike(true);
            setHeartIcon('ios-heart');
        }

        // console.log(arrayOfLikes);

        array(index);

        // find();
        // dispatch(Action.updateUserData(arrayOfLikes));
       // this.setState({
       //     like:!th
       // })
       // if(this.state.like){
       //     this.setState({
       //         heartIcon:'ios-heart'
       //     })
       // }else{
       //  this.setState({
       //      heartIcon:'ios-heart-empty'
       //  })
       // }
    }

        return (
            <View style={styles.container}>
                <Text style={styles.username}>
                    {detail.name.toUpperCase()}
                </Text>
                <View>
                    <Image style={styles.imageStyle} source={{uri: `https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`}} />
                </View>

                <View style={styles.heartContainer}>
                    <TouchableWithoutFeedback onPress={()=>toggleLike(index)} >
                        <Icon name={heartIcon} size={30} style={{color:heartIcon === "ios-heart-empty" ? 'black' :'red',paddingHorizontal:5}}/>
                    </TouchableWithoutFeedback>
                </View>
                {/*<Button onPress={()=>find()}><Text>Done</Text></Button>*/}
            </View>
        );
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

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         updateUserData : (data) =>{
//             dispatch(Actions.updateUser(data));
//         }
//     }
// }
//make this component available to the app
export default PhotoSection;
