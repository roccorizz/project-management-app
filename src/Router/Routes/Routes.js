import { createBrowserRouter } from 'react-router-dom'

import Main from '../../Layout/Main';

import AllProjects from '../../pages/AllProjects';
import Home from '../../pages/Home';




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


        ]
    },
]);
export default router
