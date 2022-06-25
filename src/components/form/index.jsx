import './index.css'
import { Button, Input } from "@mui/material";
import React, {useState} from 'react';

const Form = ({addTask}) => {
const [text, setText] = useState('');

const valueHandler = (e) => {
    setText(e.target.value)
}

const submit = (e) => {
    e.preventDefault()
    if(!text) return
    addTask(text)
    setText('')
}

    return (
        <form onSubmit={submit} className='form'>
            <Input 
            placeholder='Your task'
            value={text}
            onChange={(e) => valueHandler(e)}
            className='form-field'
            />
            <Button 
            variant="outlined"
            type='submit' 
            className="form-button">
                Add
            </Button>
        </form>
    )
}

export default Form