import { useState } from "react"

const UpdateWorkout = (props) => {
    const [showing, setShowing] = useState(false)
    const toggleShowing = () =>{
        setShowing(!showing)
    }
    return(
        <div>
            <div id="modal-background">
                <div id="modal-container">
                    <form id="update-form" onSubmit={(e)=>{props.updateWorkout(props.workout.id)}}>
                        <input id="input-from" onChange={props.handleUpdateInputChange} name="exercises" type="text" placeholder="Exercises"></input>
                        <br></br>
                        <input id="input-from" onChange={props.handleUpdateInputChange} name="notes" placeholder="Notes" type="text"/>
                        <br></br>
                        <button className="form-button" type="submit">Submit</button>
                        <button className="form-button" type="close" >Close</button>
                    </form>
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default UpdateWorkout