/*
 * @author: Razvan Rauta
 * Date: 28.05.2019
 * Time: 11:59
*/
import React from 'react';
import './Person.css';


const person = (props) => {


    return (
        <div className="Person" style ={style}>
            <p onClick={props.click} > I'm {props.name} and I am {props.age} old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;