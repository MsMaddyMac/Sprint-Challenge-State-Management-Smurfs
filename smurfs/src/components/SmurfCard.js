import React from 'react';
// react-redux imports
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';


const SmurfCard = props => {
    console.log('SmurfCard', props);
    return (
        <div>
           <button onClick={() => props.dispatch(getSmurfs())}>Get Smurfs!</button> 
           {props.isFetching && <h3> Here come the Smurfs!!</h3>}
            {props.error && <div>{props.error.message}</div>}
            {/* <div className="smurf" key={props.smurfs.id}>
                <h2>Name: {props.smurfs.name}</h2>

            </div> */}
           
           
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//       name: state.name,
//       age: state.age
//     };
//   };

// export default connect(
//     mapStateToProps,
//     { getSmurfs } 
//   )(SmurfCard);
export default connect(state => {
    return state;})(SmurfCard);

