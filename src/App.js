import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().getSeconds()
    };
  }
  componentDidMount() {
    this.TimerID = setInterval(() => this.tick(), this.props.value);
  }
  componentWillUnmount() {
    clearInterval(this.TimerID);
  }
  tick() {
    this.setState({
      date: new Date().getSeconds()
    });
  }
  render() {
    return (
      <div>
        <h2>
          {this.state.date % 3 === 0 && this.state.date % 5 === 0
            ? "FizzBuzz"
            : this.state.date % 5 === 0
            ? "Buzz"
            : this.state.date % 3 === 0
            ? "Fizz"
            : this.state.date}
        </h2>
      </div>
    );
  }
}

export default App;
