import React from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData(){
  const [data, setData] = React.useState<IUserData>({});
  const token = React.useContext(tokenContext);
  React.useEffect(() => {
    if(token == 'undefined' || token == ''){
      return;
    }
    axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: {Authorization: `Bearer ${token}`}
      }
    ).then((resp) => {
      const userData = resp.data;
      setData({name: userData.name, iconImg: userData.icon_img});
    })
      .catch(console.log)
  }, [token]);

  return [data];
}