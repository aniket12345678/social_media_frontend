import Home from "../pages/Home";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import ProtectedRoutes from "../components/ProtectedRoutes";

const AuthRoutes = [
    {
        element: <Signin />,
        path: '/'
    },
    {
        element: <Signup />,
        path: '/signup'
    }
];

const GuardedRoutes = [
    {
        element: <ProtectedRoutes />,
        children: [
            {
                element: <Home />,
                path: '/home'
            },
        ]
    }
];

const AllRoutes = [...AuthRoutes, ...GuardedRoutes];

export { AllRoutes }