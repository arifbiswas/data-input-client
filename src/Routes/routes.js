import {createBrowserRouter} from 'react-router-dom';
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
        ]
    }
])