import { useContext, useRef } from "react";
import { Context } from "../context/Context";
import { useHistory} from "react-router-dom";

const Login = () => {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const { handleLogin } = useContext(Context)
    const refHandleLogin = (e) => {
        handleLogin(e, emailRef, passwordRef)
    }

return (
    <>
        <View>
            <form onSubmit={refHandleLogin}>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" ref={emailRef} placeholder="Enter email" />
            </form>
        </View>
    </>
)

}

export default Login;