import React, { Component, Suspense } from 'react';
import ReactFacebookLogin from 'react-facebook-login';

export default class Facebook extends Component{
    state = {
        isLoggedIn:false,
        userID : '',
        name:'',
        email:'',
        picture:''
    }
    componentClicked=()=>{
        console.log("clicked");
        
    }
    responseFacebook=(response)=>{
        this.setState({
            isLoggedIn:true,
            userID:response.userID,
            name:response.name,
            email:response.email,
            picture: response.picture.data.url,
        })
        console.log(response);
        
        
    }
    render(){
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent=(
                <div style={{
                    width : '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding : '20px'
                }}>
                    <Suspense fallback={<h5>Loading Profile picture</h5>}>
                        <img scr={this.state.picture} alt={this.state.name} />
                    </Suspense>
                    <h2>Welcome {this.state.name} </h2>
                    <h3>{this.state.email}</h3>
                </div>
            )
        }else{
            fbContent = (<ReactFacebookLogin
                appId="3081731061910265"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)
        }
        return(
            <div>
                {fbContent}
            </div>
        );
    }
}