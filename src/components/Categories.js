import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import { categoryData } from '../constants'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import Animated, {FadeInDown} from 'react-native-reanimated';


export default function Categories({categories, activeCategory, setActiveCategory }) {
    return (
        <Animated.View  entering={FadeInDown.duration(500).springify()}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="space-x-4"
                contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
            >
                {
                    categories.map((cat, index) => {
                        let isActive = cat.strCategory == activeCategory;
                        let activatedCatrgory = isActive ? styleSheet.categoryContainer2 : styleSheet.categoryContainer;
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => setActiveCategory(cat.strCategory)}
                            >
                                <View style={activatedCatrgory} >

                                    <Image
                                        source={{ uri: cat.strCategoryThumb }}
                                        style={{ width: 70, height: 50,  }}

                                    ></Image>
                                
                                <Text style={{ fontSize: hp(1.6) }}> {cat.strCategory}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }


            </ScrollView>

        </Animated.View>


    )
}

const styleSheet = StyleSheet.create({
    categoryContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      
       
      
       
       
    },
    categoryContainer2: {

        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop:20,
        borderColor:"#FF9843",
        borderWidth:3,
        borderRadius:25,
        
        
        
        

    }

});
