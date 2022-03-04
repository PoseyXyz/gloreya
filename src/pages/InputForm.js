import React, { useContext, useState } from 'react';
import { HavenContext } from '../Context';

function InputForm(props) {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [formValues, handleValueChange] = useState([])
    const {price, minPrice, maxPrice, setPrice} = useContext(HavenContext)

    
    return (
        <div>
            <p>{username}</p>
            <p>{password}</p>
            <input type="text" name="username" value={username} onChange={(e)=>setUserName(e.target.value)} placeholder='Hello'/>
            <input text="text" name="password" value={password} placeholder='Password'/>
            <p>Hello</p>
            <label htmlFor="price">${price}</label>
            <input type="range" name="price" id="price" min={minPrice} max={maxPrice} value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
    );
}

export default InputForm;