import React from 'react';
import { Navbar } from './components/Navbar'
import { TodoForm} from './components/TodoForm'

const App: React.FC = () => {
  return <>
    <Navbar />
    <div className="container">
      <h1>Hello <span></span>👋</h1>
      <TodoForm />
    </div>
  </>
}

export default App;
