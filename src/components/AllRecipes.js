import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import MasonryList from "react-native-masonry-list";
import { categoryData } from '../constants';
import axios from 'axios';

export default function Recipes({categories}) {

  {/*const [imageURIs, setImageURIs] = useState([]);
  useEffect(() => {
   fetchImageURIs();
  },[]);
  const fetchImageURIs = async () => {
    try {
      // Fetch data from API
      const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
      

      // Array to store image URIs
      const uris = [];

      // Iterate through the data and extract image URIs
      for (let i = 0; i < response.data.categories.length; i++) {
        // Assuming each item in the data contains an 'image' property with the URI
        //const imageURI =response.data.categories[i];
        //uris.push(imageURI);
        const uris = response.data.categories.map(category => ({ uri: category.strCategoryThumb }));
        setImageURIs(uris);
      }

      setImageURIs(uris);
      console.log(imageURIs[0].strCategoryThumb);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };*/}


  return (

    <ScrollView
    vertical
      showsVerticalScrollIndicator={true}
      
      className="space-y-4"
      contentContainerStyle={{ paddingVertical: 10, paddingTop: 10 ,marginHorizontal:10}}
    >
      {
        categories.map((cat, index) => {
          
          return (
            <TouchableOpacity
              key={index}
             
            >
              <View  >

                <Image
                  source={{ uri: cat.strCategoryThumb }}
                  style={{ width:120, height: 100, }}

                ></Image>

                
              </View>
            </TouchableOpacity>
          )
        })
      }


    </ScrollView>
  )

};



const style = StyleSheet.create({
  MainContainer: {
    marginHorizontal: 4,
    marginVertical: 3

  },
  headingText: {
    fontSize: hp(2.7),
    fontWeight: "bold",
    marginLeft: 4

  }


})