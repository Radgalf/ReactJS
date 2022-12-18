import React from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardList} from "./shared/CardList";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {UserContextProvider} from "./shared/context/userContext";
import {usePostsData} from "./hooks/usePostsData";
import {PostsContextProvider} from "./shared/context/PostsContext";

function AppComponent() {
  const [token] = useToken();
  usePostsData();
  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <Layout>
          <Header/>
          <Content>
            <PostsContextProvider>
              <CardList/>
            </PostsContextProvider>
          </Content>
        </Layout>
      </UserContextProvider>
    </tokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent/>);