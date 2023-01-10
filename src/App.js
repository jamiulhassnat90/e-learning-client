import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routs';

function App() {
  return (
    <div className="container mx-auto my-2">
      <RouterProvider router={router}></RouterProvider>      
    </div>
  );
}

export default App;
