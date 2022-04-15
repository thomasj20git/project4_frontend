import logo from './logo.svg';
import './App.css';
import WorkoutContainer from './workoutsContainer/workoutsContainer';
import ClassWorkoutContainer from './classWorkoutContainer/classWorkoutContainer';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Workout Tracker</h1>
      </header>
      
      <ClassWorkoutContainer></ClassWorkoutContainer>
    </div>
   
    
  
  );
}

export default App;
