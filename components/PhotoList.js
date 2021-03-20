//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image ,ScrollView} from 'react-native';
import PhotoSection from './PhotoSection'

// create a component
class PhotoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            arrayOfLikes:[]
        };
    }

    componentDidMount() {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=250",{
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        data:result.results
                    });
                }).catch=(e)=>{
            console.log(e);
        }
    }

    getSelection(index){
        if (this.state.arrayOfLikes.includes(index)) {
            // console.log('hello');
            this.setState({arrayOfLikes:this.state.arrayOfLikes.filter(item => item !== index)});
        } else {
            // console.log('world');
            this.setState([...this.state.arrayOfLikes, index]);
        }
        console.log(this.state.arrayOfLikes);
    }

    getPhotos(){
        return this.state.data.map((data,index )=> {
            return <PhotoSection detail={data} key={data.name} index={index} array={(index)=>this.getSelection(index)}/>
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
              {this.getPhotos()}
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
  
});

//make this component available to the app
export default PhotoList;
