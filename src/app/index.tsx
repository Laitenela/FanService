import { RouterProvider } from 'react-router-dom';
// import styleClasses from './index.module.scss';
// import { Button } from '@shared/ui/button';
import { Provider } from 'react-redux';
import { router } from './routing';
import { store } from './store';

function App() {

  return (
    <>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    </>
  )
}

export default App
