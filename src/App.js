
import InputField from './component/InputField';
import './Styles.css';
import TodosList from './component/TodosList';

function App() {
  return (
    <div className="App">
     <h1>What's the plan for today?</h1>
     <InputField />
     <TodosList />
    </div>
  );
}

export default App;
