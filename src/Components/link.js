import React from 'react';

class linkComp extends React.Component {
 render(){
     const { url, text, iconClass, iconColor, uline, size} = this.props;
     return (
         <a href={url} className={iconClass} 
        style= { {'fontSize':size, 'color': iconColor}}>
            <span className={uline}>{text}</span></a>
     )
 }
}

export const Link = linkComp
