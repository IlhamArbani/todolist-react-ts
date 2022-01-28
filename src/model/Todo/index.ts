class Todo {
    id: string;
    text: string;

    constructor(text: string){
        this.text = text;
        this.id = Math.floor(Math.random() * 100).toString();
    }
}

export default Todo;