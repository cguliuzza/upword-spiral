import { useContext, useRef } from "react";
import { Context } from "../context/Context";

const Login = () => {
    const emailRef = useRef("")
    const passwordRef = useRef("")

    const { handleLogin } = useContext(Context)
    
    const refHandleLogin = (e) => {
        e.preventDefault()
        handleLogin(e, {
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
    }

    ///////////////// WITH STATE ////////////////
    // const [ email, setEmail ] = useState("")
    // const [ password, setPassword ] = useState("")

    // const handleChange = (e) => {
    //     if (e.target.name == "email") {
    //         setEmail(e.target.value)
    //     } else if (e.target.name == "password") {
    //         setPassword(e.target.value)
    //     }
    // }

return (
    <>
        <View>
            <form onSubmit={refHandleLogin}>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" ref={emailRef} placeholder="Enter email" />
            </form>

            <form onSubmit={refHandleLogin}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" ref={passwordRef} placeholder="Enter password" />
            </form>
        </View>
    </>
)

}

export default Login;