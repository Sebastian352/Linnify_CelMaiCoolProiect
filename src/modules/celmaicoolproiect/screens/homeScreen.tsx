import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import Modal from 'react-native-modal';

/*
  https://6453db49e9ac46cedf31a3e5.mockapi.io/movies?
  queryParams: search,page,limit,fieldName
*/

const HomeScreen = () => {
  
  const setVisible=() =>{
    setModalVisible(!isModalVisible);
  }

  const [isModalVisible,setModalVisible] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.favoriteButton} onPress={setVisible} />
      <Modal isVisible={isModalVisible} onBackdropPress={setVisible} style={styles.modalStyle} > 
        <SafeAreaView style={{width:'100%',height:'50%', backgroundColor:'white',borderRadius:40,paddingTop:40}}>
          <Text>I am the modal content!</Text>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  favoriteButton:{
    width:100,
    height:30,
    backgroundColor:'white',
    borderRadius:50,
    },
    modalStyle:{
      width:'100%',
      height:'80%',
      margin:0,
      borderTopLeftRadius:50,
      borderRadius:50,
      justifyContent:'flex-end',
    }
});

export default HomeScreen;
