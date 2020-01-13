class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todoList: [{ name: 'post1' }, { name: 'post2' }], textInput: '' };
    }

    onChange(textInput) {
        this.setState({ textInput })
    }

    render() {
        const { todoList, textInput } = this.state
        return (
            <div>
                <input type='text' value={this.state.textInput} onChange={e => this.onChange(e.target.value)} />
                <button>add</button>
                <ul>
                    {todoList.map((todo, index) => (
                        <li key={index}>
                            <span style={{ lineDecoration: 'line-through' }}>
                                {todo.name}
                            </span>
                            <button>delete</button>
                            <button>done</button>
                        </li>

                    ))
                    }
                </ul>
            </div>
        )
    }
}