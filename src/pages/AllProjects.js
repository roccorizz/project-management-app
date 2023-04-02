import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import ProjectCard from '../components/ProjectCard';
import { GET_PROJECTS } from '../queries/ProjectQueries';
import AddProjectModal from '../components/AddProjectModal';

export default function AllProjects() {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;
    return (
        <>
            <AddProjectModal />
            <hr />
            {data.projects.length > 0 ? (
                <div className=''>
                    {data.projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <p>No Projects</p>
            )}
        </>
    );
}