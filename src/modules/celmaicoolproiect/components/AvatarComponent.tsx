import { Pressable, StyleSheet, View, Image, Text } from "react-native"
import { User } from "../../auth/types/user";
import ImagePicker from 'react-native-image-crop-picker';

interface Props{
    user:User|null,
    pickImage: () => void;
}

export const AvatarComponent = (props:Props) =>{
   

    return(
        <Pressable onPress={props.pickImage} style={styles.containerStyle} >
            {!props.user?.profilePicture ? (<Text style={styles.textProfile}>{props.user.email.charAt(0)}</Text>) : (<Image style={{width:150,height:150, borderRadius:40,borderWidth:5,borderColor:'black'}} source={{uri:props.user?.profilePicture}}/>)}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    containerStyle:{
        width:150,
        height:150,
        backgroundColor:'lightblue',
        borderRadius:40,
        borderWidth:3,
        borderColor:'black',
        justifyContent:'center',
        alignItems:'center'
    },
    textProfile:{
        fontSize:64,
        fontWeight:'bold',
        color:'black',
    }

})