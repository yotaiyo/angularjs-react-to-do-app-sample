class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todoList: [], textInput: '', currentTime: new Date().toLocaleTimeString() };
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

    deleteTodo(index) {
        let todoList = this.state.todoList
        todoList.splice(index, 1)
        this.setState({ todoList })
    }

    toggleTodo(index) {
        let todoList = this.state.todoList
        const todo = todoList[index]
        todoList[index] = { name: todo.name, done: !todo.done }
        this.setState({ todoList })
    }

    intervalFn() {
        const setState = this.setState.bind(this)
        this.props.$interval(function() {
            setState({ currentTime: new Date().toLocaleTimeString() })
        }, 1000)
    }

    render() {
        const { todoList, textInput, currentTime } = this.state
        this.intervalFn()
        return (
            <div>
                <div>{'currentTime:' + currentTime}</div>
                <input type='text' value={this.state.textInput} onChange={e => this.onChange(e.target.value)} />
                <button onClick={() => this.addTodo(textInput)}>add</button>
                <ul>
                    {todoList.map((todo, index) => (
                        <li key={index}>
                            {todo.done ? <del>{todo.name}</del> : <span>{todo.name}</span>}
                            <button onClick={() => this.deleteTodo(index)}>delete</button>
                            <button onClick={() => this.toggleTodo(index)}>done</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}