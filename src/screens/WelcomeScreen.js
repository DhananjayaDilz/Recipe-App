import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';


export default function WelcomeScreen() {
    const animation = useRef(null);
    const navigation = useNavigation();
    const ring1Padding =useSharedValue(0);
    const ring2Padding =useSharedValue(0);

    useEffect(()=>{
        ring1Padding.value=0;
        ring2Padding.value=0;
        setTimeout(()=>ring1Padding.value=withSpring(ring1Padding.value+hp(5)),100);
        setTimeout(()=>ring2Padding.value=withSpring(ring2Padding.value+hp(5)),300);
    },[])
    return (
        <View style={styles.container} className="space-y-10">
            
            <Animated.View className="bg-white/20 rounded-full " style={{padding:ring1Padding}} >
                <Animated.View className="bg-white/20 rounded-full" style={{padding:ring2Padding}} >
                    <Image
                        source={require("../../assets/images/Fries.jpg")}
                        style={{
                            position: "relative",
                            height: 200,
                            width:  200,
                            borderRadius: 150,
                            borderColor: "#FFAD84",
                            borderWidth: 5,
                           

                        }}
                    />
                </Animated.View>
            </Animated.View>
            <View className="flex items-center ">
            <Text style={styles.helloFoody}>Hello Foody</Text>
            </View>
            <TouchableOpacity style={styles.goButtn}>
                <Text style={{fontWeight:"bold",fontSize:15}}>Lets Go</Text>
            </TouchableOpacity>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFC47E",
        
        justifyContent: "center",
        flex: 1,
        alignItems: "center",

    },
    helloFoody:{
        fontWeight:"bold",
        color:"#fff",
        fontSize: 40,
        letterSpacing:3,
        marginBottom:-20,
        marginTop:55
    
    },
    goButtn:{
        backgroundColor:"#FFF78A",
        height:45,
        width:120,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
    


    }
});


