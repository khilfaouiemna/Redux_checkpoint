import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';
import AddTodo from './components/addTodo';
import FilterTodo from './components/FilterTodo';

function App() {
  return (
    
    <div className="App" >
      <FilterTodo/>
      <AddTodo/>
      
        <TodoList/>
        
    </div>
   
  );
}

export default App;
