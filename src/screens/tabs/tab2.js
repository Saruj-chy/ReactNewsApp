import { Container } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import Product from '../Product/Product';

const tab2 = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fc7559cc422e4387a27915995870bf0c`)
      .then(response => response.json())
      .then(data => setNews(data.articles))
  }, [])

  return (
    <ScrollView>
      {
        news.map(data => <Product product={data} key={data.key} />)
      }


    </ScrollView>

  );
};

export default tab2;