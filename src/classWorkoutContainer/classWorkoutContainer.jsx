import React from "react"
import SingleWorkoutComponent from "./singleWorkoutContainer/sinlgeWorkoutContainer"
import NewWorkoutComponent from "./newWorkoutComponent/newWorkout"

class ClassWorkoutContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            workouts: [],
            newWorkouts: {
                exercises: "",
                notes: "",
            }
        }
    }
    handleNewInputChange = (e) => {
        this.setState({
            newWorkouts: {
                ...this.state.newWorkouts,
                [e.target.name]: e.target.value
            }
        })

    }
    createNewWorkout = async (e) => {
        e.preventDefault();
        console.log(this.state.newWorkouts)
        const apiResponse = await fetch('https://mysterious-badlands-61174.herokuapp.com/api/workouts/', {
            method: 'POST',
            body: JSON.stringify(this.state.newWorkouts),
            headers: {
                "Content-Type": 'application/json'
            }

        })
        const createParsedResponse = await apiResponse.json()
        console.log(createParsedResponse)
        this.setState({
            workouts: [...this.state.workouts, createParsedResponse]
        })
    }
    async getWorkouts(){
        const apiResponse = await fetch('https://mysterious-badlands-61174.herokuapp.com/api/workouts/')
        const parsedResponse = await apiResponse.json()
        console.log(parsedResponse)
        this.setState({
            workouts: parsedResponse
        })
        
    }
    deleteWorkout = async (idToDelete) => {
        const deleteResponse = await fetch(`https://mysterious-badlands-61174.herokuapp.com/api/workouts/${idToDelete}/`, {
            method: "DELETE"
        })
        console.log(deleteResponse.status)
        if(deleteResponse.status == 204){
            this.setState({
                workouts: this.state.workouts.filter(c => c.id !== idToDelete)
            })
        }
        const parsedDeleteResponse = await deleteResponse.json()
        console.log(parsedDeleteResponse)
    }
    handleUpdateInputChange = (e) => {
        this.setState({
            updateWorkouts: {
                ...this.state.updateWorkouts,
                [e.target.name]: e.target.value
            }
        })

    }
    updateWorkout = async (idToUpdate) => {
        const apiResponse = await fetch(`https://mysterious-badlands-61174.herokuapp.com/api/workouts/${idToUpdate}/`, {
            method: "PUT",
            body: JSON.stringify(this.state.updateWorkouts),
            headers: {
                "Content-Type": "application/json"
            }

        })
        console.log(apiResponse.status)
    }
    componentDidMount(){
        this.getWorkouts()
        console.log("api call")
    }
    render() {
        console.log("rendering")
        return(
            <div>
                <div>
                    <NewWorkoutComponent createNewWorkout={this.createNewWorkout} handleNewInputChange={this.handleNewInputChange}  ></NewWorkoutComponent>
                </div>
                <div id="flex-container">
                    {this.state.workouts.map((workout)=>{
                        return <SingleWorkoutComponent handleUpdateInputChange={this.handleUpdateInputChange} updateWorkout={this.updateWorkout} deleteWorkout={this.deleteWorkout} workout={workout} key={workout.id} ></SingleWorkoutComponent>
                    })}
                </div>
            </div>

        )
       
    }
}

export default ClassWorkoutContainer 