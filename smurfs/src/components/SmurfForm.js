// react imports
import React, { useState } from 'react';
// react-redux imports
import { connect } from 'react-redux';
// action import
import { postSmurf } from '../actions';

function SmurfForm(props) {
    console.log('Form', props);
    const [inputs, setInputs] = useState({
        name: "",
        age: 0,
        height: ""
    })

    const handleChange = e => setInputs({...inputs, [e.target.name]: e.target.value});

    const handleSubmit = async e => {
        e.preventDefault();
        props.dispatch(postSmurf(inputs));
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' name='name' onChange={handleChange} value={inputs.name} />
            <label>Age</label>
            <input type='text' name='age' onChange={handleChange} value={inputs.age} />
            <label>Height</label>
            <input type='text' name='height' onChange={handleChange} value={inputs.height} />
            <button type='submit'>Submit</button>
        </form>
        </>
    )

}

export default connect(state => {
    return state;})(SmurfForm);