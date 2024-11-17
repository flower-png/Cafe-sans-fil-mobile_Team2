/* cette "page" contiendra la page individuelle des items. 
Cette page est enfaite plus un modal component (pop-up).
il faut afficher:
    - photo
    - nom
    - reste de l'info de l'api (ou placeholder si manque d'infos)
    - boutton commander (pour l'instant ne fait rien)

Documentation du component modal: https://reactnative.dev/docs/modal
*/

// pour l'instant, les infos dans cet exemple devraient suffire
import { useState } from 'react';
import {itemObj} from '../assets/exemple_data/item_exemple';
import { Alert, View, Text, TouchableOpacity, Modal, ScrollView, Pressable} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


export default function Item(){
    // state variable pour définir 2 états: si le modal est visible ou non
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Modal animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setIsModalVisible(!isModalVisible);
                    }}>
                    
                </Modal>

                <Pressable
                onPress={() => setIsModalVisible(true)}>
                    <Text>Show Modal</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaProvider>

    );

}