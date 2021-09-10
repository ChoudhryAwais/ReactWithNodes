import React from 'react'; 



export const C3 = (props) =>{
    return (
        <div className="btn col-lg-4" onClick={props.onClick}>  
            <div className="row text-center p-4 text-white">
                <div className="col-xl-12 bg-secondary p-3 border rounded ">
                    <h3>Computer Science</h3>
                    <p>This course is about computer science</p>
                </div>
            </div>       
        </div>
        
    )
}