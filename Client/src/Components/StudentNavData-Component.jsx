import React from 'react';

export class StudentNavData extends React.Component
{
    render (){
        if(this.props.selected){
            return (
                <div>{this.props.children}</div>
            );
        }
        else
        {
            return (
                <div></div>
            )
        }
    }
}