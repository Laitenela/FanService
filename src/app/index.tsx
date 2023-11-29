import styleClasses from './index.module.scss';
import { Button } from '@shared/ui/button';

function App() {

  return (
    <>
      <Button>Button here</Button>
      <div className={styleClasses.app}>Hello</div>
    </>
  )
}

export default App
