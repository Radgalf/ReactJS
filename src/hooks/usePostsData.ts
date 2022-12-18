import React from "react";
import {tokenContext} from "../shared/context/tokenContext";
import axios from "axios";

export interface IPostData {
  subreddit: string;
  title: string;
  thumbnail: string;
  author: string;
  score: number;
  created: Date;
  id: string;
}

export function usePostsData() {
  const [postData, setPostData] = React.useState<IPostData[]>([]);
  const token = React.useContext(tokenContext);
  React.useEffect(() => {
    if(token == 'undefined'){
      return;
    }
    axios.get(
      "https://oauth.reddit.com/best.json?sr_detail=true",
      {headers: {Authorization: `Bearer ${token}`}}
    ).then((resp) => {
        let result: Array<IPostData> = [];
        resp.data.data.children.forEach((children: {data: any})=>{
          let newObj: IPostData = {
            author: children.data.author,
            subreddit: children.data.subreddit,
            title: children.data.title,
            thumbnail: children.data.thumbnail,
            score: children.data.score,
            created: new Date(children.data.created*1000),
            id: children.data.id
          };

          result.push(newObj)
        })
        setPostData(result);
    })
      .catch(console.error)
  },[token]);

  return [postData];
}

