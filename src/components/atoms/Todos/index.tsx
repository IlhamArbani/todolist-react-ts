import React from "react"
import TodoItem from "../TodoItem"
import { Todo } from "../../../model"
import classes from './Todos.module.css'

const Todos: React.FC<{items: Todo[],removeList: (id: string) => void}> = (props) => {
    return(
        <ul className={classes.todos}>
            {props.items.map(item => {
                return <TodoItem key={item.id} removeList={props.removeList.bind(null, item.id)} text={item.text}/>
            })}
        </ul>
    )
}

export default Todos