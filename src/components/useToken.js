/** @format */

import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      console.log(user);
      const email = user?.email;
      console.log(user?.email);
      if (email) {
        const { data } = await axios.post(
          "https://assighment11.herokuapp.com/login",
          {
            email
          }
        );
        setToken(data.accessToken);
        console.log(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }
    };
    getToken();
  }, [user]);
  return [token];
};

export default useToken;
