import { Card } from 'antd';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
    return (
        <div className='' style={{ padding: '5px 30px' }}>
            <Card title={project.name}
                extra={<Link to={`/projects/${project.id}`}>View</Link>}
            >
                <p>Status: <strong>{project.status}</strong></p>
            </Card>

        </div>
    );
}
