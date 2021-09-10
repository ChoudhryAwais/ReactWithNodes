import React from 'react'; 



export const C2 = (props) =>{
    return (
        <div className="btn col-lg-4" onClick={props.onClick}>  
            <div className="row text-center p-4 text-white">
                <div className="col-xl-12 bg-secondary p-3 border rounded ">
                    <h3>Pre-Medical</h3>
                    <p>This course is about Medical</p>
                </div>
            </div>       
        </div>
        
    )
}