import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native'
import { categoryData } from '../constants'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Image } from 'expo-image';


export default function Categories() {
    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="space-x-4"
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    categoryData.map((cat, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                              
                            >
                                <View  style={styleSheet.categoryContainer}>
                                    
                                <Image
                                    source={{uri:cat.img}}
                                    style={{width:hp(6.5),height:hp(6.5),borderRadius:15,borderColor:"#111",borderWidth:1}}
                                ></Image>                                  
                                <Text style={{fontSize:hp(1.6)}}> {cat.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }


            </ScrollView>

        </View>


    )
}

const styleSheet=StyleSheet.create({
    categoryContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        paddingTop:10,
        paddingRight:5

    }
});
