import React from 'react';
// react-redux imports
import { connect } from 'react-redux';
// action import
import { getSmurfs } from '../actions';
// styling import
import styled from "styled-components";

const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 3px solid #f1f1f1;
  perspective: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const FlipInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;
 const FlipCardSides = styled.div`
  background: #cacfd2;
  color: #4b7fad;
 `;

const SmurfCard = props => {
    console.log('SmurfCard', props);
    return (
        <div>
            <h2>Press for Smurfs</h2>
           <button className="get-btn" onClick={() => props.dispatch(getSmurfs())}>Get Smurfs!</button> 
           {props.isFetching && <h3> Here come the Smurfs!!</h3>}
            {props.error && <div>{props.error.message}</div>}
                {props.smurfs && props.smurfs.map((smurf, id) => (
                    <div className="smurfs" key={id}>
                        <FlipCard className="character-card" >
                            <FlipInner className="flipcard-inner">
                            <FlipCardSides className="flipcard-front">
                                <h2>{smurf.name}</h2> 
                            </FlipCardSides>
                            <FlipCardSides className="flipcard-back">
                                <p>{smurf.age} years old</p>
                                <p>Height: {smurf.height}</p>
                            </FlipCardSides>
                            </FlipInner>
                        </FlipCard>
                    </div>
                ))}
        </div>
    )
}


export default connect(state => {
    return state;})(SmurfCard);

