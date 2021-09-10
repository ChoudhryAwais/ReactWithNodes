import React from 'react';
import { SideNav } from './SideNav-Component';
import { TeacherMainSection } from './Teacher-Main-Component';

export const Teacher =()=>{
    return (
        <div>
            <div className="row">
                <div className="col-xl-3 col-md-4">
                    <SideNav/>
                </div>
                <div className="col-xl-9 col-md-8">
                    <TeacherMainSection/>
                </div>
            </div>
        </div>
    )
}