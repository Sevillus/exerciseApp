
import "./CalculatorForm.css"
import {exercises} from "../../src/data/exercises.json"


const text='deadlift'
const getExercise = () =>{
    exercises.forEach(el =>{
        if(el.name.toLowerCase().indexOf(text) !== -1){
            console.log(el.name)
        }else{

        }
    })
}


const CalculatorForm = () =>{
    return(
        <>
            <button onClick={getExercise}></button>
        </>
    )
}

export default CalculatorForm