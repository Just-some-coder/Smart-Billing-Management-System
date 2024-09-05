import LandingPage from "./LandingPage.jsx";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Dashboard from "./Dashboard.jsx";
import Inventory from "./Inventory.jsx";
import Insights from "./Insights.jsx";
import {Navigate} from "react-router-dom";
import Invoice from "./Invoice.jsx";
import Settings from "./Settings.jsx";

const routes = [
    {
        path : '/',
        element : <LandingPage/>,
        errorElement : <ErrorPage/>
    },
    {
        path :'/login',
        element: <Login/>
    },
    {
        path : '/signup',
        element : <SignUp/>
    },
    {
        path: 'user',
        element: <Dashboard/>,
        children: [
            {
                element: <Navigate to={'inventory'}/>,
                index : true
            },
            {
                path : 'inventory',
                element : <Inventory/>,
            },
            {
                path : 'insights',
                element: <Insights/>
            },
            {
                path :'invoice',
                element: <Invoice/>
            },
            {
                path : 'settings',
                element: <Settings/>
            },
            {
                path : 'profile',
                // element: <Profile/>
            }
        ]
    }
]

export default routes