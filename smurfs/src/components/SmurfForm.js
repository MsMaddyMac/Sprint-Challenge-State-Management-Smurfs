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
        height: "",
        id: props.smurfs[props.smurfs.length -1].id + 1
    })


}

export default connect(state => {
    return state;})(SmurfForm);