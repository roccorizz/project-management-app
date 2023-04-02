import { createBrowserRouter } from 'react-router-dom'

import Main from '../../Layout/Main';

import AllProjects from '../../pages/AllProjects';
import Home from '../../pages/Home';
import ProjectCard from '../../components/ProjectCard';
import EditProjectForm from '../../components/EditProjectForm';




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />,
            },

            {
                path: '/allprojects',
                element: <AllProjects />
            },

            {
                path: '/projects/:id',
                element: <EditProjectForm />,
                loader: ({ params }) => fetch(`http://localhost:3003/projects/${params.id}`)
            },

        ]
    },
]);
export default router
