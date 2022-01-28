import React from "react"
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{text: string,removeList: () => void}> = (props) => {
    return <li className={classes.item} onClick={props.removeList}>{props.text}</li>
}

export default TodoItem