
import { ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import pic from './assets/img.PNG'

const image = { uri: "https://media.istockphoto.com/photos/render-of-colorful-typography-picture-id1346684222?b=1&k=20&m=1346684222&s=170667a&w=0&h=Otv5R9AlR7zlJ3HHI6vpY-DonRAEn0oDr5dXQjD-8Kk=" };

export default function App() {
  
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>HAPPY BIRTHADAY TO YOU</Text>
      <Text style={styles.name} >Being young is a privilege. Being attractive is a genetic gift. Being cool? That is all you. Happy birthday.</Text>
      {/* <Image  
     style={styles.tinyLogo}  
          source={{ 
          uri: 'https://media.istockphoto.com/photos/render-of-colorful-typography-picture-id1346684222?b=1&k=20&m=1346684222&s=170667a&w=0&h=Otv5R9AlR7zlJ3HHI6vpY-DonRAEn0oDr5dXQjD-8Kk=',
        }} /> */}
    </ImageBackground>
   
   
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
   
    backgroundColor:"red",
    borderColor:"yellow",
   },
  
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "aqua",
      borderRadius:200,
      marginTop:-300,

      
    }, 
    image: {
      flex: 1,
      justifyContent: "center",
     
      
    },
    tinyLogo: {
      width: 500,
      height: 500,
      borderRadius:20,
      justifyContent: "center",
    alignItems:"center"
  
    },
    name: {
      color: "red",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0",
      
    }, 
});
