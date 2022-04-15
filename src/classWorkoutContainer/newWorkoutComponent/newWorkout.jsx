import { useState } from "react"

const NewWorkoutComponent = (props) => {
    const [showing, setShowing] = useState(false)
    const toggleShowing = () =>{
        setShowing(!showing)
    }
    return (
        <div>
            {showing?
            <div id="modal-background">
            <div id="modal-container">
                <form onSubmit={props.createNewWorkout}>
                    <input onChange={props.handleNewInputChange} name="exercises" type="text" placeholder="Add Exercises"></input>
                    <br></br>
                    <input onChange={props.handleNewInputChange} name="notes" type="text" placeholder="Add Notes"/>
                    <br></br>
                    <button type="submit">Submit</button>
                    <button className="form-button" onClick={toggleShowing}>Close</button>
                </form>
            </div>
        </div>
        :
        <button className="Create-button" onClick={toggleShowing}>Add Last Workout</button>
            }
        </div>
        

       
    )
}
export default NewWorkoutComponent