/*
 * @author: Razvan Rauta
 * Date: 29.05.2019
 * Time: 15:46
*/

import React from 'react';
import cssClasses from './Cockpit.css';

const cockpit = (props) => {

    const classes = [];
    let btnClass='';

    if (props.showPersons){
        btnClass = cssClasses.Red
    }

    if (props.persons.length <= 2) {
        classes.push(cssClasses.red);
    }

    if (props.persons.length <= 1) {
        classes.push(cssClasses.bold);
    }

    return (
        <div className={cssClasses.Cockpit}>
            <h1> {props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>

    );
};

export default cockpit;