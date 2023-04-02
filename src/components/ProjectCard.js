import { Card } from 'antd';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
    console.log('project.id:', project.id);
    return (
        <div className=''>
            <Card title={project.name}

                extra={<Link to={`/projects/${project.id}`}>View</Link>}
            >
                <p>Status: <strong>{project.status}</strong></p>

            </Card>

        </div>
    );
}
