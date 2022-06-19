import React from "react";

class labelcomp extends React.Component{

    render(){

        const { text, iconClass, labelClass, placeHolder, func, varname , inputType } = this.props;
     return (
        <div>
            <div>
                <label className={labelClass}>{text}</label>
            </div>
            <div>
                <i className={iconClass}></i>
                <input type={inputType} placeholder={placeHolder} onChange = {func} name = {varname} />
            </div>
        </div>
     )

    }

}

export const Label= labelcomp
