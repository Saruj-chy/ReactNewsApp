import React, { Component } from 'react';
import { Container, Header, Content, Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import WebViews from './Webview/WebViews';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#009387' }} hasTabs>
          <Left />
          <Body>
            <Title style={{ color: 'white' }}>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
          <Tab tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor: 'lightgreen' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'black' }} heading="Bitcoin">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor: 'lightgreen' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'black' }} heading="Business">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor: 'lightgreen' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'black' }} heading="Apple Product">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}