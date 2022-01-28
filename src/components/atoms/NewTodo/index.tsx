import {useRef} from "react"
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{addToDO: (text: string) => void}> = (props) => {

    const input = useRef<HTMLInputElement>(null)

    const formHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredValue = input.current!.value;

        if(enteredValue.trim().length === 0){
            return;
        }
        props.addToDO(enteredValue);
    }


    return(
        <form className={classes.form} onSubmit={formHandler}>
            <label htmlFor="text">To Do Text</label>
            <input name="text" ref={input}/>
            <button>Add</button>
        </form>
    )
}

export default NewTodo