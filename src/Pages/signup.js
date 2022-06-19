import React from 'react';
//import { Link } from '../Components/link';
import { Label } from '../Components/label';
//import { Thank } from './thanks';
import { Button } from '../Components/buttons';

class signupComponent extends React.Component {
    constructor() {
        super();
        this.state= {
            value: '',
            uname: '',
            fname: '',
            lname: '',
            phone: '',
            mail: '',
            pass: '',
            signedIn: true,
            auth: true
        };
        this.buttonClick = this.buttonClick.bind();
        this.getval = this.getval.bind();

    }

    getval = (event) => {
        //console.log('Event :',event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({[name]: value });
    
    }

    buttonClick = (event) => {
        event.preventDefault();
        const  { uname , fname , lname , phone , mail , pass  } = this.state;
        console.log('Username on submit :', uname);
        console.log('Firstname on submit :', fname);
        console.log('Lastname on submit :', lname);
        console.log('Phone on submit :', phone);
        console.log('Email on submit :', mail);
        console.log('Password on submit :', pass);
        
        /*
         this.setState({ signedIn : !signedIn });
        users.user.forEach(user => {
            if (user.uname===uname && user.pass===pass) {
                this.setState({ auth : !auth , signedIn : !signedIn });
                
            } else {

                //alert("wrong input");
                this.setState({auth : false});
                
            }
        })
        

    }
    backbutton =()=> {
        
        const  { signedIn } = this.state;
        this.setState({ signedIn : !signedIn });
        */

    }

    render(){

        return(
            <div className='box'>
                <div>
                    <h2 className='centertext'>SIGNUP</h2>
                    <Label
                    text='Username'
                    inputType='text'
                    iconClass='fa-solid fa-user'
                    labelClass='left'
                    placeHolder='Enter Username'   
                    func={this.getval}
                    varname= 'uname'
                    />
                    <Label
                    text='First Name'
                    inputType='text'
                    iconClass='fa-solid fa-keyboard'
                    labelClass='left'
                    placeHolder='Enter first name'   
                    func={this.getval}
                    varname= 'fname'
                    />
                    <Label
                    text='Last Name'
                    inputType='text'
                    iconClass='fa-solid fa-keyboard'
                    labelClass='left'
                    placeHolder='Enter last name'   
                    func={this.getval}
                    varname= 'lname'
                    />
                    <Label
                    text='Phone'
                    inputType='number'
                    iconClass='fa-solid fa-mobile-button'
                    labelClass='left'
                    placeHolder='Enter phone number'   
                    func={this.getval}
                    varname= 'phone'
                    />
                    <Label
                    text='Email'
                    inputType='email'
                    iconClass='fa-solid fa-at'
                    labelClass='left'
                    placeHolder='Enter mail id'   
                    func={this.getval}
                    varname= 'mail'
                    />
                    <Label
                    text='Password'
                    inputType='password'
                    iconClass='fa-solid fa-lock'
                    labelClass='left'
                    placeHolder='Enter Password'   
                    func={this.getval}     
                    varname= 'pass'
                    />
                </div>
                <div className='centertext space'>
                    <Button
                    //linkClass = 'linkButton'
                    text ='SIGNUP'
                    buttonClass = 'otherButtons'
                    func = {this.buttonClick}
                    />
                </div>
            </div>
                
        )

    }

}

export const Signup = signupComponent;
