// create a context and Context Provider to wrap the App in

import { createContext } from "react";

export const Context = createContext()
const ContextProvider = props => {
    // props will be passed down to App
    // everything inside here is the same as a normal react component

    const [ didThisWork, setDidThisWork ] = useState("it worked!!")

    const testFunction = () => {
        console.log("This is a test function.")
    }
    const store = { didThisWork, tina: "Tina waz here", testFunction }

    // return remains constant in this format
    // props.children is the App.js which has everything we want to render
    return <Context.Provider value={store}>{props.children}</Context.Provider>
}

export default ContextProvider