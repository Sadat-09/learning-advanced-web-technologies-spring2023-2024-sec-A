import React, { useState } from 'react';
import Education from './Education';

const EducationList: React.FC = () => {
    const educationList = [
        {
            degree: 'BSc CSE',
            institution: 'American International University Bangladesh',
            duration: 'Fabruary 2021 – Dec 2024',
            grade: 'CGPA-3.60'
        },
        {
            degree: 'HSC',
            institution: 'Comilla GOV School',
            duration: 'Jul 2018 – Jul 20',
            grade: 'GPA-5.00'
        },
        {
            degree: 'SSC',
            institution: 'Comilla Zilla School',
            duration: 'Jan 2013 – Jun 2018',
            grade: 'GPA – 5.00'
        }
    ];

   
    return (
        <div>
            <h2>Education: </h2>
            {
                educationList.map((edu, index) => (
                    <Education
                        key={index}
                        degree={edu.degree}
                        institution={edu.institution}
                        duration={edu.duration}
                        grade={edu.grade}
                    />
                ))
            }
            {/* <button onClick={addCount}> + </button>
            <h2>{count}</h2>
            <button onClick={reduceCount}> - </button> */}
        </div>
    );
}

export default EducationList;
