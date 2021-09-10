import React from 'react'; 
import { HomeMainSection } from './Home-Main-Component';
import { SideNav } from './SideNav-Component';


export const Home = () =>{
    return (
        <div>
            <div className="row">
                <div className="col-xl-3 col-md-4">
                    <SideNav/>
                </div>
                <div className="col-xl-9 col-md-8">
                    <HomeMainSection/>
                </div>
            </div>
        </div>
        
    )
}