import { useContext } from "react";
import { Link } from "react-router"
import { UserContext } from "../../contexts/UserContext";

const NavBar = () => {
    const { user, setUser } = useContext(UserContext)

    const handleSignOut = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    return (
      <nav>
        {user ? (
            // if the user logged in
            <ul>
                <li>
                    Welcome, {user.name}
                </li>
                <li>
                    <Link to = '/'>Dasboard</Link>
                </li>
                <li>
                    <Link to='/' onClick={handleSignOut}>Sign Out</Link>
                </li>
            </ul>

        ) : (
            //if the user NOT logged in
            <ul>
                <li>
                <Link to = '/'>Home</Link>
                </li>
                <li>
                    <Link to='/sign-up'>Register</Link>
                </li>
                <li>
                    <Link to='/sign-in'>Sign In</Link>
                </li>
            </ul>
        )}
      </nav>
    );
  };
  
  export default NavBar;