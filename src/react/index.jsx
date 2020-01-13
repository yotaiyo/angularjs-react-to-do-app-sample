class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todoList: [], textInput: '' };
    }

    onChange(textInput) {
        this.setState({ textInput })
    }

    addTodo(textInput) {
        let todoList = this.state.todoList
        todoList.push({ name: textInput, done: false })
        this.setState({ todoList})
        this.setState({ textInput: '' })
    }

    toggleTodo(index) {
        let todoList = this.state.todoList
        const todo = todoList[index]
        todoList[index] = { name: todo.name, done: !todo.done }
        this.setState({ todoList })
    }

    render() {
        const { todoList, textInput } = this.state
        return (
            <div>
                <input type='text' value={this.state.textInput} onChange={e => this.onChange(e.target.value)} />
                <button onClick={() => this.addTodo(textInput)}>add</button>
                <ul>
                    {todoList.map((todo, index) => (
                        <li key={index}>
                            {todo.done ? <del>{todo.name}</del> : <span>{todo.name}</span>}
                            <button>delete</button>
                            <button onClick={() => this.toggleTodo(index)}>done</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}