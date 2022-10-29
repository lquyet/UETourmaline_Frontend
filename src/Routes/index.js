import DefaultLayout from "../components/Layouts/DefaultLayout"
import Login from "../pages/Login"
import MainScreen from "../pages/MainScreen"
import Player from "../pages/Player"
import Profile from "../pages/Profile"
import Upload from "../pages/Upload"

export const publicRoutes = [
    {
        path:'/',
        page:MainScreen,
        layout: DefaultLayout
    },
    {
        path:'/profile',
        page: Profile
    },
    {
        path:'/login',
        page: Login
    },
    {
        path:'/player',
        page: Player
    },
    {
        path: '/upload',
        page: Upload
    }
]