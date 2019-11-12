import React, { Component } from "react";
import "./App.css";
import Generatenumber from "./components/generateNumber/generateNumber.jsx";
import Userpick from "./components/userPick/userPick.jsx";
import Result from "./components/result/result.jsx";

class App extends Component {
  state = {
    numbers: [],
    userpick: [],
    total: 0,
    result: []
  };

  showResult = () => {
    const result = [];
    this.state.numbers.forEach(element => {
      this.state.userpick.forEach(subElement => {
        if (element === subElement.nubmer && subElement.pick) {
          result.push(element);
        }
      });
    });
    this.setState({ result });
  };

  generate = () => {
    const min = 5;
    const max = 36;
    const numbers = [];
    while (numbers.length < 5) {
      const randomNumber = Math.round(Math.random() * (max - min) + min);
      if (!numbers.find(elem => elem === randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    console.log(numbers)
    numbers.sort((a,b) => a-b);
    console.log(numbers)
    

    this.setState({ numbers });
  };

  generateUserPick = () => {
    let userpick = [];
    let start = 5;
    const end = 36;
    while (start <= end) {
      const obj = {
        nubmer: start,
        pick: false
      };
      userpick.push(obj);
      start++;
    }
    this.setState({ userpick, numbers: [], total: 0, result: [] });
  };

  activePick = async index => {
    if (this.state.total < 6) {
      const userpick = [...this.state.userpick];
      userpick[index].pick = !this.state.userpick[index].pick;
      let total = userpick.filter(x => x.pick).length;
      this.setState({ userpick, total });
      if (total === 6) {
        await this.generate();
        this.showResult();
      }
    }
  };

  render() {
    return (
      <div className="container d-flex justify-center align-items-center flex-column">
        <h1 className="text-center">5 from 36</h1>
        <button
          onClick={this.generateUserPick}
          className="btn btn-primary my-2"
        >
          Generate
        </button>
        <div className="number-wrap my-2">
          {this.state.numbers.map((e, index) => (
            <Generatenumber number={e} key={index} />
          ))}
        </div>

        {this.state.userpick.length ? (
          <p className="text-info">Сhoose six number's 🡇</p>
        ) : null}
        {this.state.result.length ? (
          <Result result={this.state.result.join(", ")} />
        ) : null}

        <div className="userPick-wrap my-2">
          {this.state.userpick.map((e, index) => (
            <Userpick
              key={index}
              usernumber={e.nubmer}
              pick={e.pick}
              activePick={() => this.activePick(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
