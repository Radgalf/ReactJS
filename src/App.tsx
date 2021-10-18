import React from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardList} from "./shared/CardList";
import {generateId, generateRandomString} from "./utils/react/generateRandomIndex";
import {GenericList} from "./shared/GenericList";
import {merge} from "./utils/js/merge";
import {DropdownTemplate} from "./shared/DropdownTemplate";

const LIST = [
  {As:"li" as const,text: 'some'},
  {As:"li" as const,text: 'some1'},
  {As:"li" as const,text: 'some2'},
  {As:"li" as const,text: 'some3'}
].map(generateId);


function AppComponent() {
  const [list, setList] = React.useState(LIST);
  const handleItemClick = (id: string) => {
    setList(list.filter((item) => item.id !== id));
  }
  const handleAdd = () => {
    setList(list.concat(generateId({text: generateRandomString(), As:"li" as const})));
  }
  return (
    <Layout>
      <Header/>
      <Content>
        <CardList/>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent/>);