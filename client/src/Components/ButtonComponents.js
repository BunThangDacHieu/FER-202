import React from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';


export default function ButtonComponents() {
    return (
        <div style={{
            display: 'grid',

            justifyContent: 'space-between', alignContent: '-moz-initial'
        }}>
            <div>
                <Button.Group>
                    <Link to='/project-card'>
                        <Button color="gray">Course</Button>
                    </Link>
                    <Button color="gray">Project</Button>

                </Button.Group>
                <div className="semester-select">
                    <label>SEMESTER</label>
                    <select>
                        <option value="SUMMER2024">SUMMER2024</option>
                    </select>
                </div>
                <div>
                    <h3 style={{ color: 'blueviolet' }}>Recently Updated (Để xem chi tiết về các thay đổi cập nhật gần đây, vui lòng nhấp vào đây)</h3>
                </div>
            </div>
        </div>
    );
}
