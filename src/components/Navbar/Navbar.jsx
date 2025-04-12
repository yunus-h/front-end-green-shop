import { useContext } from "react";
import { Link } from "react-router"
import { UserContext } from "../../contexts/UserContext";

import styles from "../Navbar/Navbar.module.css";
import Logo from "../../assets/images/greenshop_logo.png";
import CartImage from "../../assets/images/cart.png";

const NavBar = () => {
    const { user, setUser } = useContext(UserContext)

    const handleSignOut = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    return (
      <nav className={styles.container}>
        <Link to='/'><img src={Logo} alt='greenshoplogo' /></Link>
        <h1>Green Shop</h1>
        {user ? (
            // if the user logged in
            <ul>
                <li>
                    {user.name} - {user.role}
                </li>
                <li>
                    <Link to = '/'>Home</Link>
                </li>
                <li>
                  <Link to= '/products'>Products</Link>
                </li>
                <li>
                  <Link to= '/products/new'>New Product</Link>
                </li>
                <li>
                    <Link to='/' onClick={handleSignOut}>Sign Out</Link>
                </li>
                <li>
                  <img src={CartImage} alt="cart" />
                </li>
            </ul>

        ) : (
            //if the user NOT logged in
            <ul>
                <li>
                    <Link to='/sign-in'>Sign In</Link>
                </li>
                <li>
                    <Link to='/sign-up'>Register</Link>
                </li>    
            </ul>
        )}
      </nav>
    );
  };
  
  export default NavBar;