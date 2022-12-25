import {createBrowserRouter} from 'react-router-dom';
import UpdateUser from '../Components/UpdateUser';
import UserInfo from '../Components/UserInfo';
import Main from '../Layouts/Main';

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Main></Main>,
        children : [
            {
                path : "/",
                element : <UserInfo></UserInfo>    
            },
            {
                path : "/userInfo",
                element : <UserInfo></UserInfo>    
            },
            {
                path : "/updateUser/:id",
                element : <UpdateUser></UpdateUser>,
                loader : ({params})=>fetch(`https://data-input-server.vercel.app/userData/${params.id}`)    
            },
        ]
    }
])