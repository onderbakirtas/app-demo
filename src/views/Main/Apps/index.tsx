import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text } from 'react-native';
import { Page } from '@/components';
import { Card } from 'react-native-elements';

export default function Index() {
  const [news, setNews] = useState([] as Array<object>);
  const APIKEY = 'pub_119ef8422ea520e040d451541a4da51a8d4';
  useEffect(() => {
    async function getNews() {
      let response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${APIKEY}`,
      );
      response = await response.json();
      console.log(response);
      setNews(response.results);
    }

    getNews();
  }, []);
  return (
    <Page>
      {/* <Text>{JSON.stringify(news)}</Text> */}
      <ScrollView>
        {news.map(item => {
          return (
            <Card>
              <Card.Title>{item.title}</Card.Title>
              <Card.Divider />
              <Card.Image
                source={item.image_url ?? require('../../../assets/ts.png')}
              />
              <Card.Divider />
              <Text>{item.description}</Text>
            </Card>
          );
        })}
      </ScrollView>
    </Page>
  );
}
