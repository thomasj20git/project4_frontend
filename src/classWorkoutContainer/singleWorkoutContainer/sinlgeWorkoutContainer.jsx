import UpdateWorkout from "./updateWorkout/updateWorkout"
import { useState } from "react"

const SingleWorkoutComponent = (props) => {
    const [showing, setShowing] = useState(false)
    const toggleShowing = () =>{
        setShowing(!showing)
    }
   
    return(
        <div id="workout-divs">
            <h3>Date: {props.workout.date}</h3>
            <h5>Exercises: {props.workout.exercises}</h5>
            <p>Notes: {props.workout.notes}</p>
            <button className="form-button" onClick={()=>props.deleteWorkout(props.workout.id)}>delete this workout</button>
            {showing ?
            <UpdateWorkout workout={props.workout} handleUpdateInputChange={props.handleUpdateInputChange} updateWorkout={props.updateWorkout} ></UpdateWorkout>
            :
            <button className="form-button" onClick={toggleShowing}>Edit This Post</button>
            }  
        </div>
    )
}

export default SingleWorkoutComponent