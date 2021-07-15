import React from 'react';

class HelloMessage extends React.Component {
    render () {
        return (
            <div>
                Olá, {this.props.name}David!
            </div>
        );
    }
}

export default HelloMessage;