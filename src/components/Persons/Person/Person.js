/*
 * @author: Razvan Rauta
 * Date: 28.05.2019
 * Time: 11:59
*/
import React from 'react';


class Person extends React.Component {

    render() {
        return (
            <React.Fragment>
                <p key="p3" onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} old</p>
                <p key="p1">{this.props.children}</p>
                <input key="p2" type="text" onChange={this.props.changed} value={this.props.name}/>
            </React.Fragment>
        )

    }

}

export default Person;