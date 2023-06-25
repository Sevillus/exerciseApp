
import "./CalculatorForm.css"
import {exercises} from "../../src/data/exercises.json"
import {Box} from "@mui/material";
import {useState} from "react";


const ExerciseSearch = () =>{

    const [exerciseName , setExerciseName] = useState("")

    const findExercises = (e) =>{
        setExerciseName(e.target.value)
        getExercise()
    }

    const [matchedExercise, setMatchedExercise] = useState([])

    const getExercise = () => {

        const filteredExercises = exercises.filter((el) => {
            return el.name.toLowerCase().indexOf(exerciseName.toLowerCase()) !== -1;
        });

        const matchedExerciseNames = filteredExercises.map((el) => el.name);
        setMatchedExercise(matchedExerciseNames);
    }

    const changeExerciseName = (i) => {
        setExerciseName(matchedExercise[i])
        setMatchedExercise([])
    }




        return(
        <Box>
            <input type="text" value={exerciseName} onChange={findExercises}/>
            <Box sx={{display:"flex", flexDirection:"column" ,maxHeight:"300px" , overflowY:"scroll"}}>
                {matchedExercise.map((el ,i ) => (
                    exerciseName.length > 2?
                        <button onClick={() =>changeExerciseName(i)}>{i+1} {el}</button>
                        :""
                ))}
            </Box>
        </Box>

    )
}

export default ExerciseSearch