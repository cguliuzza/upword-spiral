import { useContext } from "react";
import { Context } from "../context/AppStateProvider";
import { NavLink } from "react-router-dom";
import { View } from 'react-native';

const NavBar = () => {
    const { loggedIn, handleLogout } = useContext(Context)

if (loggedIn) {
    return (
        <>
            <View id="navbar">
                <NavLink to="/users/:id">Profile</NavLink>
                <NavLink to="/journals">Journal</NavLink>
                <NavLink to="/actions">5 Minute Moments</NavLink>
                <NavBar onClick={handleLogout}>
                    <Button>Logout</Button>
                </NavBar>
            </View>
        </>
    )
} else {
    return (
        <>
            <View id="navbar">
                <NavLink to="/">Upward Spiral HOME</NavLink>
                <NavLink to="/login">Login</NavLink>
            </View>
        </>
    )
}
}

export default NavBar;