import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return(
    <div className="main resume-contianer">
      <div className="resume">
        <embed src="JasonRowland-Resume.pdf" width="700" height="575" type='application/pdf'/>
      </div>
    </div>
  )
}

export default Resume;
