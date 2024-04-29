import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Categories from '../components/Categories';
import axios from 'axios';
import Recipes from '../components/AllRecipes';


export default function HomeScreen() {

  const [activeCategory, setActiveCategory] = useState("Spaghetti");
  const [categories, setCtegories] = useState([]);

  useEffect(() => {
    getCategories();
  }, [])

  const getCategories = async () => {
    try {
      const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
      //console.log(response.data)
      if (response && response.data) {
        setCtegories(response.data.categories);
      }
    } catch (err) {
      console.log("error: ")
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style='dark'></StatusBar>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, marginTop: 40, }}


      >
        <View style={styles.bellIconContainer}>
          <Image source={require("../../assets/images/AvatarIcon.png")} style={{ height: hp(6), width: hp(6), marginLeft: 5 }} />
          <Image source={require("../../assets/images/bell.png")} style={{ height: hp(6), width: hp(6) }} />

        </View>



        <View>
          <Text style={{
            paddingLeft: 8,
            paddingTop: 10,
            fontSize: 15

          }}>
            Hello, Dhananjaya</Text>
        </View>
        <View>
          <Text style={{
            paddingLeft: 8,
            paddingTop: 18,
            fontSize: 40,
            fontWeight: "bold"

          }}>
            Choose as your</Text><Text style={{ color: "#FF9843", fontSize: 48, fontWeight: "bold", letterSpacing: 9, marginLeft: -15, marginTop: -10 }} > Favours </Text>
        </View>


        <View style={styles.searchBar}>
          <TextInput
            placeholder='Search your food item'
            placeholderTextColor={"black"}
            style={{ fontSize: hp(2) }}

          >

          </TextInput>
          <Image source={require("../../assets/images/lense.png")} style={{ height: hp(3.5), width: hp(3.5), marginLeft: 170 }} />


        </View>
          <View>
        { categories.length>0 && <Categories categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory}></Categories>}    
        </View>
        <View>
          <Recipes categories={categories}></Recipes>
        </View>
         </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"#FFF78A",
    backgroundColor: "#FFFADD"

  },
  bellIconContainer: {
    marginHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,

  },
  searchBar: {
    flexDirection: "row",
    marginHorizontal: 4,
    backgroundColor: "#FFF6F4",
    borderRadius: 50,
    padding: 10,
    marginTop: 40,
    borderColor: "#111",
    borderWidth: 1


  }
});