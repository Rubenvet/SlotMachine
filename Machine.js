class Machine extends React.Component {
    render() {
        let welcome = this.props.welcome;
        const {v1, v2, v3} = this.props;
        return (
            <div>
            <h1>Slot Machine Magic!</h1>
            <p>{welcome}</p>
            <p>{v1}{v2}{v3}</p>
            </div>

        )
    }
}