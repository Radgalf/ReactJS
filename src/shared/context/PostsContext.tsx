import React from "react";
import {usePostsData} from "../../hooks/usePostsData";

export interface IPostContextData {
  subreddit: string;
  title: string;
  thumbnail: string;
  author: string;
  score: number;
  created: Date;
  id: string;
}
export const postsContext = React.createContext<IPostContextData[]>([]);

export function PostsContextProvider({children} : {children: React.ReactNode}){
  const [postsData] = usePostsData();

  return (
    <postsContext.Provider value={postsData}>
      {children}
    </postsContext.Provider>
  );
}