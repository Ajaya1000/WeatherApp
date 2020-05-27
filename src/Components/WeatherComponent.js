import React, { Component } from 'react';

export default class Weather extends Component{
    
    render(){
        return(
            <div>
                {this.props.temperature && <p>Temperature :{Math.floor(this.props.temperature-273)} Celsius</p>}  
                {this.props.city && this.props.country && <p>Location :{this.props.city}, {this.props.country}</p> }
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.description && <p>description :{this.props.description}</p>}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
}