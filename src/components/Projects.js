import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import ProjectCard from './ProjectCard';
import { GET_PROJECTS } from '../queries/ProjectQueries';
import AddProjectModal from './AddProjectModal';
import { Link } from 'react-router-dom';


export default function Projects() {
    const limit = 3;
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;

    return (
        <>
            <AddProjectModal />

            {data.projects.length > 0 ? (
                <div className='projectslist'>

                    {data.projects.slice(0, limit).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            ) : (
                <p>No Projects</p>
            )}
            <div className='see-more'>
                {data.projects.length > limit && (
                    <Link to="/projects">
                        <button className='seemore_btn'>See More</button>
                    </Link>
                )}
            </div>
        </>
    );
}
