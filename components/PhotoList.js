//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image ,ScrollView} from 'react-native';
import PhotoSection from './PhotoSection'

// create a component
class PhotoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
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

    getPhotos(){

        return this.state.data.map((data,index )=> {
            return <PhotoSection detail={data} key={data.name} index={index}/>
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
