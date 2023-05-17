import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from "react-native-reanimated";
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import { COLORS } from "../../../constants/themes";

interface Props{
    index:number,
}


const AnimatedCircle = (props:Props) =>{
    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);

    useEffect(()=>{
        scale.value = withDelay(300*props.index,withRepeat(withTiming(props.index*2,{duration:1000}),
        -1,true
        ));
        opacity.value = withDelay(300*props.index,withRepeat(withTiming(0.2,{duration:1000}),
        -1,true
        ));
    },[])

    const rStyle = useAnimatedStyle(()=>{
        return{
            opacity:opacity.value,
            transform:[{
                scale:scale.value
            }]
        }
    });



    return(
    <Animated.View style={[styles.circle,rStyle]}>
    </Animated.View>
    )
}

const styles = StyleSheet.create({
    circle:{
        position:'absolute',
        width:50,
        height:50,
        backgroundColor:COLORS.secondary,
        borderRadius:15,
        zIndex:-1,
    }
})

export default AnimatedCircle;