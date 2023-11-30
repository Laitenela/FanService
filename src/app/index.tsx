import { RouterProvider } from 'react-router-dom';
// import styleClasses from './index.module.scss';
// import { Button } from '@shared/ui/button';
import { router } from './routing';

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
