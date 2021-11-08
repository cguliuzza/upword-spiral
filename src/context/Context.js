import { createContext } from "react";
import { useHistory } from "react-router-dom";

export const Context = createContext()
const ContextProvider = props => {
    // props will be passed down to App
    // everything inside here is the same as a normal react component

    const [ user, setUser ] = useState({})
    const [ loggedIn, setLoggedIn ] = useState(false)
    const history = useHistory()

    const findMe = () => {
        fetch("/me", {
          credentials: "same-origin"
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
        fetch("/logout", {
          method: "DELETE"
        }) .then(data => {
            console.log("logged out")
            setUser({})
            setLoggedIn(false)
            history.push("/")
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
        fetch("/login", loginObj)
          .then(resp => resp.json())
          .then((data) => {
            console.log(data)
            if (!data.errors) {
              console.log("Logged in successfully!!")
              setUser(data)
              setLoggedIn(true)
              history.push("/profile")
            } else {
              console.log("no catch: ", data.errors)
            }
          })
          .catch((err) => console.log("catch: ", err))
      }

    const store = {user, setUser, loggedIn, setLoggedIn, findMe, handleLogout, handleLogin}

    // props.children is the App.js which has everything we want to render
    return <Context.Provider value={store}>{props.children}</Context.Provider>
}

export default ContextProvider;