import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const Product = (props) => {
  const { author, title, description, url, urlToImage, content, publishedAt } = props.product;
  // console.log(title, description, urlToImage);
  return (
    <View style={styles.viewStyle}>
      <Image source={{
        uri: urlToImage
      }} style={styles.imageStyle}></Image>

      <View style={{ flex: 3, flexDirection: 'column' }}>
        <Text style={{ ...styles.bodyStyle, fontSize: 18, color: 'lightgreen' }} numberOfLines={1}>{title}</Text>
        <Text style={styles.bodyStyle} numberOfLines={3}> {description} </Text>
      </View>


      <Text style={styles.showStyle}>View</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: { flexDirection: 'row', borderColor: 'red', borderWidth: 2 },

  imageStyle: { width: 70, height: 70, borderRadius: 50, margin: 10, justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center', borderColor: 'cyan', borderWidth: 2, flex: 1 },

  bodyStyle: { textAlignVertical: 'center', fontSize: 15 },

  showStyle: { flex: 1, justifyContent: 'center', textAlign: 'center', textAlignVertical: 'center', color: 'blue' },




})

export default Product;