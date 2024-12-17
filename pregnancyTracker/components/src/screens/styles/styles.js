// styles.js
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';


const styles = StyleSheet.create({
  background:{
    flex:1,
    resizeMode:'cover',
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  optionContainer: {
    width: '100%',
    backgroundColor: '#E5E5E5',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  categoryTitle:{
    fontSize:10,
    fontWeight:'bold',
    color:'#F59A1B',
    padding:10,
    backgroundColor:'#FFFFFF'
  },
  subCategoryContainer:{
    marginLeft:10
  },
  subCategory:{
    marginBottom:8
  },
  subCategoryTitle:{
    fontSize:10,
    fontWeight:'bold',
    color:'#F59A1B',
    padding:10,
    backgroundColor:'#F5F5F5',
    marginBottom:8,
    borderRadius:5,
  },
  contentContainer:{
    marginLeft:10,
    padding:10,
    backgroundColor:'#FFFFFF',
    borderRadius:5,
  },
  article:{
    marginBottom:8,
  },
  articleTitle:{
    fontSize:10,
    fontWeight:'bold',
    color:'#C425A4',
  },
  articleContent:{
    fontSize:10,
    color:'#333',
  }
});

export default styles;
