import React from 'react';
import { Link } from 'react-router-dom';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsPersonVcard } from "react-icons/bs";
import '../css/ProjectCard.css';  // Ensure this CSS file is created

const ProjectCard = () => {
    return (
        <div className="project-card flex-container">
            <h3>PMG201c ↔ [Cần Tên Của Kì học] Project management (Quản trị dự án)</h3>
            <p className='info'>
                <LiaChalkboardTeacherSolid /> SE1737-NJ
            </p>
            <p className='info'>
                <IoPersonCircleOutline /> edu_next_ltr_fpt_edu_02
            </p>
            <p className='info'>
                <BsPersonVcard />
                Number of students: 24
            </p>
            <Link to="#" className="course-link">
                Go to course <IoIosArrowRoundForward />
            </Link>
        </div>
    );
}

export default ProjectCard;
