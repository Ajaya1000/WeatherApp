import React, { Component } from 'react';
export default class FormComp extends Component{
    render(){
        return(
                <form onSubmit={this.props.getWeather} >
                    
                        <input type='text' name='city' placeholder="..City" />
                        <input type='text' name='country' placeholder="..Country" />
                        <button type='submit'>Get Weather</button>
                   
                </form>
        );
    }
}
