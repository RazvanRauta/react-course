/*
 * @author: Razvan Rauta
 * Date: 27.05.2019
 * Time: 16:07
*/

import React from 'react';
import classesCSS from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {id: '1', name: 'Max', age: '40'},
                {id: '2', name: 'Mitica', age: '28'},
                {id: '3', name: 'Marcela', age: '25'}
            ],
            otherState: 'some other value',
            showPersons: false,
            showCockpit: true
        };
    }

    // static getDerivedStateFromProps(props, state){
    //
    //     return state;
    // }


    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    nameChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});

    };

    deletePersonHandler = (personIndex) => {

        const persons = [...this.state.persons];

        persons.splice(personIndex, 1);
        this.setState({persons: persons})

    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});

    };


    render() {

        let persons = null;


        if (this.state.showPersons) {

            persons = (
                <div>
                    <Persons persons={this.state.persons}
                             clicked={this.deletePersonHandler}
                             changed={this.nameChangedHandler}/>
                </div>
            );
        }

        return (

            <div className={classesCSS.App}>
                <button onClick={() => {
                    this.setState({showCockpit: false});
                }}>Remove Cockpit
                </button>
                {this.state.showCockpit ? <Cockpit title={this.props.appTitle}
                                                   showPersons={this.state.showPersons}
                                                   persons={this.state.persons}
                                                   clicked={this.togglePersonsHandler}/>
                    : <p>Nothing to show</p>}
                {persons}

            </div>

        );

        // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, from the element'));
    }

}

export default App;