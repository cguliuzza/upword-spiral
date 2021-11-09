// import { useHistory } from "react-router-dom";
import React, { createContext, useState} from "react";
export const AppStateContext = createContext();

const AppStateProvider = props => {

  const [ user, setUser ] = useState({})
  const [ loggedIn, setLoggedIn ] = useState(false)
  // const history = useHistory()

  const findMe = () => {
    fetch("http://localhost:3000/me", {
      credentials: "same-origin",
    })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          setUser(data)
          setLoggedIn(true)
        }
      })
    .catch(error => console.log(error))
  }

    const handleLogout = () => {
      fetch("http://localhost:3000/logout", {
        method: "DELETE"
      }) .then(data => {
          console.log("logged out")
          setUser({})
          setLoggedIn(false)
          // history.push("/")
      })
    }
    
    const handleLogin = ( formData ) => {
      const loginObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
      fetch("http://localhost:3000/login", loginObj)
        .then(resp => resp.json())
        .then((data) => {
          console.log(data)
          if (!data.errors) {
            console.log("Logged in successfully!!")
            setUser(data)
            setLoggedIn(true)
            // history.push("/profile")
          } else {
            console.log("no catch: ", data.errors)
          }
        })
        .catch((err) => console.log("catch: ", err))
    }

  const store = {findMe, user, setUser, loggedIn, setLoggedIn, handleLogout, handleLogin, tina:"value"}

  return (
    <AppStateContext.Provider value={store}>
      {props.children}
    </AppStateContext.Provider>
  );
};
export default AppStateProvider;

//////////////////////

// const ContextProvider = props => {
//   // props will be passed down to App
//   // everything inside here is the same as a normal react component

    // const [ user, setUser ] = useState({})
    // const [ loggedIn, setLoggedIn ] = useState(false)
    // const history = useHistory()

    // const findMe = () => {
    //   fetch("http://localhost:3000/me", {
    //     credentials: "same-origin",
    //   })
    //     .then(resp => resp.json())
    //     .then(data => {
    //       if (!data.error) {
    //         setUser(data)
    //         setLoggedIn(true)
    //       }
    //     })
    //   .catch(error => console.log(error))
    // }

    //   const handleLogout = () => {
    //     fetch("http://localhost:3000/logout", {
    //       method: "DELETE"
    //     }) .then(data => {
    //         console.log("logged out")
    //         setUser({})
    //         setLoggedIn(false)
    //         history.push("/")
    //     })
    //   }
      
    //   const handleLogin = ( formData ) => {
    //     const loginObj = {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(formData)
    //     }
    //     fetch("http://localhost:3000/login", loginObj)
    //       .then(resp => resp.json())
    //       .then((data) => {
    //         console.log(data)
    //         if (!data.errors) {
    //           console.log("Logged in successfully!!")
    //           setUser(data)
    //           setLoggedIn(true)
    //           history.push("/profile")
    //         } else {
    //           console.log("no catch: ", data.errors)
    //         }
    //       })
    //       .catch((err) => console.log("catch: ", err))
    //   }

    // const store = {findMe, user, setUser, loggedIn, setLoggedIn, handleLogout, handleLogin}

//     // props.children is the App.js which has everything we want to render
//     return <Context.Provider value={store}>{props.children}</Context.Provider>
// }

// export default ContextProvider;




