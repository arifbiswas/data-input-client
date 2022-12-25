
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/routes';

function App() {
  return (
    <div className="container mx-auto mt-5 ">
    <h2 className='text-center text-lg font'>Please enter your name and pick the Sectors you are currently involved in.</h2>
    <RouterProvider router={router}>

    </RouterProvider>
    </div>
  );
}

export default App;
