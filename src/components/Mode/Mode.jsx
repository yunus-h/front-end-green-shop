import { useState } from "react";
import "./Mode.css"

const Mode = () => {

    const [mode, setMode] = useState('light')

    const handleChange = (event) => {
        console.log(event.target.value)
        setMode(event.target.value)
      }

    return (
        <div>
            <label htmlFor="mode">Mode: </label>
            <select name="mode" id="mode" onChange={handleChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="neon">Neon</option>
            <option value="night">Night</option>
            </select>
        </div>
    )
}

export default Mode

