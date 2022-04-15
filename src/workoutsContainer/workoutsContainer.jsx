import { useState, useEffect} from "react"
import SingleWorkoutComponent from "../classWorkoutContainer/singleWorkoutContainer/sinlgeWorkoutContainer"



const WorkoutContainer = () => {
    const [workouts, setWorkouts] = useState([])
    const getWorkouts = async () => {
        const apiResponse = await fetch('https://mysterious-badlands-61174.herokuapp.com/api/workouts')
        const parsedResponse = await apiResponse.json()
        console.log(parsedResponse)
        setWorkouts(parsedResponse)
    }
    

    return (
        <div>
            <h5>Workouts Container!!!</h5>
            <button onClick={getWorkouts}>get Workouts</button>
            <div id="flex-container">
            
                {workouts.map((workout)=>{
                    return <SingleWorkoutComponent workout = {workout} key={workout.id} ></SingleWorkoutComponent>
                })}
            </div>
            
            
        </div>
    )
}

export default WorkoutContainer