/*
 * @author: Razvan Rauta
 * Date: 27.05.2019
 * Time: 16:07
*/

import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
    state = {
        persons: [
            {name: 'Max', age: '40'},
            {name: 'Mitica', age: '28'},
            {name: 'Marcela', age: '25'},
            {name: 'Marius', age: '35'}
        ]
    };

    switchNameHandler = (newName = 'Max') => {

        this.setState({
            persons: [
                {name: newName, age: '40'},
                {name: 'Bla', age: '28'},
                {name: 'Marcela', age: '25'},
                {name: 'Marius', age: '35'}
            ]
        });
    };

    nameChangedHandler = (event) => {

        this.setState({
            persons: [
                {name: 'Max', age: '40'},
                {name: event.target.value, age: '28'},
                {name: 'Marcela', age: '25'},
                {name: 'Marius', age: '35'}
            ]
        });

    };

    render() {

        const style = {
            backgroundColor: 'red',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1> Hi from here!</h1>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('Maximilian!!!!')}>Switch name
                </button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Max!')}
                    changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );

        // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, from the element'));
    }

}

export default App;