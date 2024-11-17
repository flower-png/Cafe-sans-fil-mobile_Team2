/* Cette page s'occupera du onboarding process (images qui se suivent avec des bouttons next et précendent)
à la dernière image, on push avec router vers la page login
*/

import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
// Première page avec image + text
function Page1(){
    return(
    //<ScrollView>
        <View style={styles.pageContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/onboarding_images/page1.jpg')} style={styles.image}/>
            </View>

            <View>
                <TouchableOpacity style={styles.centerButton}>
                    <Text style={styles.textButton}>
                        Suivant
                    </Text>
                </TouchableOpacity>     
            </View>
        </View>
    //</ScrollView>
    );
}

// Deuxième page avec image + text
function Page2(){
    return(
        <View>
            <View>
                <Image source={require('../assets/images/onboarding_images/page2.jpg')}/>
            </View>
            <View>
                <TouchableOpacity style={styles.centerButton}>
                    <Text>
                        Suivant
                    </Text>
                </TouchableOpacity>     
            </View>

        </View>

    );
}

// Troisième page avec image + text + boutton qui redirige vers login page
function Page3(){
    return(
        <Image source={require('../assets/images/onboarding_images/page3.jpg')}/>
    );
}

// fonction qui va tout assembler en un
// on ira de page en page en slidant vers la droite ou la gauche (avancer ou reculer)
// ce serait nice d'avoir une sorte de progress bar en haut.
export default function onBoarding(){
    return(
        <Page1/>
    );
}

const styles = StyleSheet.create({
    image: {
        alignSelf: 'auto',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth,
        flex:1,
        backgroundColor: 'white'
    },
    pageContainer:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    centerButton:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 20,
        backgroundColor: 'blue',
        padding:15,
        margin:100
    },
    textButton:{
        color: 'white',
        fontSize:20
    }

});