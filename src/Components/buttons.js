import React from "react";

class buttonComp extends React.Component{

    render(){

        const { text, buttonClass, func , url , linkClass } = this.props;
     return (
        <div>
            <button className={buttonClass} onClick = {func}>
                <a className={linkClass} href ={url}> {text} </a> </button>
        </div>
     )

    }

}

export const Button= buttonComp
