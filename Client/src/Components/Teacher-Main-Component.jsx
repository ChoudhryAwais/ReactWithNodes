import React from 'react'; 


export const TeacherMainSection = () =>{
    return (
        <div>
            <div className="row text-center bg-warning">
                <div className="col-xl-12 hometop text-white">Teacher Page</div>
            </div>
            <div className="row text-center mt-5 p-3 text-white h1">
                <div className="col-md-6  ">
                    <div className="m-3 p-4 bg-info border rounded">Our Principle</div>
                </div>
                <div className="col-md-6  ">
                    <div className="m-3 p-4 bg-info border rounded">Managing director</div>
                </div>
            </div>
            <div className="row text-center p-3 text-white h1">
                <div className="col-md-6  ">
                    <div className="m-3 p-4 bg-info border rounded">Senior Teachers</div>
                </div>
                <div className="col-md-6  ">
                    <div className="m-3 p-4 bg-info border rounded">Junior Teacher</div>
                </div>
            </div>
        </div>
    )
}