function getLetter() {
    const letters = ["🥝", "🍓", "🍋"];
    const random = letters[Math.floor(Math.random() * letters.length)];
    return random
  }

class App extends React.Component {
    render() {
        const r1 = getLetter();
        const r2 = getLetter();
        const r3 = getLetter();
        let msg;
        if (r1 == r2 && r2 == r3) {
            msg = 
            <div>
                <h2>Congrats! You win!</h2>
            </div>
        } else {
            msg =
            <div>
            <h2>Sorry, Try again!</h2>
            </div>
        }

        return (
            <div>
                <Machine
                welcome="Welcome to the slot Machine Magic!"
                v1={r1}
                v2={r2}
                v3={r3}
                />
                {msg}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));