class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.open}>Open me!</button>
        )
    }
}