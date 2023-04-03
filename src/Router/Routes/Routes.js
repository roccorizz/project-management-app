import { createBrowserRouter } from 'react-router-dom'

import Main from '../../Layout/Main';

import AllProjects from '../../pages/AllProjects';
import Home from '../../pages/Home';
import Project from '../../pages/Project';





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
                path: '/projects/:id',
                element: <Project />,
            },
            {
                path: '/projects',
                element: <AllProjects />,
            },

        ]
    },
]);
export default router
