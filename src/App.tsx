import React from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardList} from "./shared/CardList";
import { generateId} from "./utils/react/generateRandomIndex";

const LIST = [
  {value: 'some'},
  {value: 'some1'},
  {value: 'some2'},
  {value: 'some3'}
].map(generateId);


function AppComponent() {
  return (
    <Layout>
      <Header/>
      <Content>
        <CardList/>
      </Content>
    </Layout>
  );
}

export const App = hot(AppComponent);