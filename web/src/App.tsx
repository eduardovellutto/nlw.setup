import './styles/global.css';

import { Habit } from "./components/habits";


function App() {
  return(
    <div>
      <Habit completed={5}/>
    </div>
  )
}

export default App
