import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { signUp } from "../../services/authService";
import { UserContext } from "../../contexts/UserContext";

import styles from "./SignUpForm.module.css"

const SignUpForm = () =>{
    const navigate = useNavigate()
    const emptyFormData = {
        role: 'buyer',
        username: '',
        password: '',
        passwordConf:'',
        name:'',
        email: '',
        address: '',
        city:'',
        state:'',
        country: '',
        zip:'',
        phone: '',
    }

    const [formData, setFormData] = useState(emptyFormData)
    const [message, setMessage] = useState('')
    const { setUser } = useContext(UserContext)

    const handleChange = (event) => {
        setMessage('')
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        
        try {
            const newUser = await signUp(formData)

            setUser(newUser)

            navigate('/')

        } catch (err) {
            setMessage(err.message)
        }
    }

    const isFormInvalid = () => {
        if (!formData.username === '') {
            return true
        }

        if(formData.password === '') {
            return true
        }

        if (formData.password !== formData.passwordConf) {
            return true
        }
    }

    return (
        <main className={styles.container}>
            <h1>Registration Form</h1>
            <p>{message}</p>
          

          
            <form onSubmit={handleSubmit}>
                <div>
                    <p>*required</p>
                </div>

                <div className={styles.accountType}>
                    <div>
                        <label htmlFor="role">Select account type*:</label>
                    </div>
                    <div>
                        
                        <label htmlFor="role">Buyer</label>
                        <input
                            type="radio"
                            id="buyer"
                            name="role"
                            value="buyer"
                            checked={formData.role === "buyer"}
                            onChange={handleChange}
                            className={styles.radioButton}
                        />
                       
                    </div>

                    <div>
                        <label htmlFor="role">Seller </label>
                        <input
                            type="radio"
                            id="seller"
                            name="role"
                            value="seller"
                            checked={formData.role === "seller"}
                            onChange={handleChange}
                            className={styles.radioButton}
                        />
                        
                    </div>
                </div>

                <div>
                    <label htmlFor="username">Username*: </label>
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div>
                    <label htmlFor="password">Password*: </label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div>
                    <label htmlFor="passwordConf">*Confirm Password*: </label>
                    <input 
                        type="password"
                        id="passwordConf"
                        name="passwordConf"
                        value={formData.passwordConf}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div>
                    <label htmlFor="name">Name*: </label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                    />
                </div>
     
                <div>
                    <label htmlFor="email">E-mail*: </label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div>
                    <label htmlFor="address">Address: </label>
                    <input 
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="city">City: </label>
                    <input 
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="state">State: </label>
                    <input 
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="country">Country: </label>
                    <input 
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="zip">Zip Code: </label>
                    <input 
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="phone">Phone: </label>
                    <input 
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                
                <div>
                    <button disabled={isFormInvalid()} type="submit">Register</button>
                    <button onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </main>
    )
}

export default SignUpForm