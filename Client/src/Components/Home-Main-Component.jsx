import React from 'react'; 


export const HomeMainSection = () =>{
    return (
        <div>
            <div className="row text-center bg-warning">
                <div className="col-xl-12 hometop text-white">Home Page</div>
            </div>
            <div className="row text-center mt-5 p-3 text-white h1">
                <div className="col-md-6  ">
                    <div className="m-3 p-4 bg-secondary border rounded">Courses we offer</div>
                </div>
                <div className="col-md-6  ">
                    <div className="m-3 p-4 bg-secondary border rounded">Fee Structure</div>
                </div>
            </div>
            <div className="row text-center p-3 text-white h1">
                <div className="col-md-6  ">
                    <div className="m-3 p-4 bg-secondary border rounded">Eligibility Criteria</div>
                </div>
                <div className="col-md-6  ">
                    <div className="m-3 p-4 bg-secondary border rounded">Our Results</div>
                </div>
            </div>
        </div>
    )
}