import { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
    // const host = "https://my-enotes.herokuapp.com"
    const host = "https://my-enotes.deta.dev"

    const [user, setUser] = useState([])
    const getUser = async () => {
        //API Call
        const response = await fetch(`${host}/api/auth/get-user`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token' : localStorage.getItem('token')
        }
      });
      const json = await response.json();
    //   console.log(json)
      setUser(json)
      // console.log("user set")
    //   console.log(user)

    }

    return(
        <UserContext.Provider value = {{user, getUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState