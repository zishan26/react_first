import React from 'react';
import { Button } from '../Components/buttons';

class thankyou extends React.Component {
    goBack = () => {
        const { backbutton } = this.props;
        backbutton();
    }
 render(){
     return (
        <div>
            <div className='space10' >
                <Button 
                text='Go back'
                buttonClass='otherButtons '
                func={this.goBack}
                />
            </div>
            <div>
            <h1 className='centertext space red'>Thanks for signing in!</h1>
            </div>
        </div>
     )
 }
}

export const Thank = thankyou;