import React from 'react';

export const StudentNav =(props) => {
    return (
        <div>
            <div className="hometop">
                {props.tabss.map(tab => 
                    {
                    return (
                            <button className="btn btn-warning ml-3" value={tab} onClick={props.isSelected}>{tab}</button>
                        )
                    }
                )}
            </div>
            {props.children}
        </div>
    )
}