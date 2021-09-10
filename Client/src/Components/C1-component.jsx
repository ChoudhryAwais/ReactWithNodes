import React from 'react'; 



export const C1 = (props) =>{
    return (
        <div className="btn col-lg-4" onClick={props.onClick}>  
            <div className="row text-center p-4 text-white">
                <div className="col-xl-12 bg-secondary p-3 border rounded ">
                    <h3>Pre-Engineering</h3>
                    <p>This course is about Engineering</p>
                </div>
            </div>       
        </div>
        
    )
}