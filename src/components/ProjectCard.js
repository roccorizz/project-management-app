import { Card } from 'antd';

export default function ProjectCard({ project }) {
    return (
        <div className=''>
            <Card title={project.name} extra={<a href={`/projects/${project.id}`}>View</a>}>
                <p>Status: <strong>{project.status}</strong></p>

            </Card>
        </div>
    );
}
