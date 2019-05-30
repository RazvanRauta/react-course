/*
 * @author: Razvan Rauta
 * Date: 29.05.2019
 * Time: 15:20
*/

import React from 'react';
import Person from "./Person/Person";

class Persons extends React.Component {

    static mapPropsToState(props, state){

        return state;
    }

    shouldComponentUpdate(nextProps,nextState){

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentWillUnmount() {
        console.log('[Persons.js] component will unmount')
    }

    render() {

        // {/*Foreach persons as person*/}
        return this.props.persons.map((person, index) => {
            return (<Person
                    name={person.name}
                    age={person.age}
                    click={() => this.props.clicked(index)}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}/>
            );
        });
    }
}


export default Persons;