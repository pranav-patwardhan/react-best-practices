import React, { Component } from 'react';
class ShallowWorld extends Component{

    render(){
        return(
            <div className="container">
                <strong>This is just a test for shallow {this.props.name}</strong>
            </div>
        );
    }
}

export default ShallowWorld;