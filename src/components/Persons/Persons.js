/*
 * @author: Razvan Rauta
 * Date: 29.05.2019
 * Time: 15:20
*/

import React from 'react';
import Person from "./Person/Person";

// {/*Foreach persons as person*/}
const persons = (props) => props.persons.map((person, index) => {
        return <Person
            name={person.name}
            age={person.age}
            click={() => props.clicked(index)}
            key={person.id}
            changed={(event) => props.changed(event, person.id)}/>
    }
);

export default persons;