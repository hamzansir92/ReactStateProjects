import "./App.css";
import React, { Component } from "react";
import img from "./michael jackson.jpg";
class App extends Component {
  state = {
    Person: {
      fullName: "Michael Jackson",
      bio: "né le 29 août 1958 à Gary (Indiana) et mort le 25 juin 2009 à Los Angeles (Californie), est un auteur-compositeur-interprète, danseur-chorégraphe et acteur américain.",
      imgSrc: img,
      profession: " Un auteur-compositeur-interprète, danseur-chorégraphe et acteur américain.",
    },
    show: true,
    digit: 0,
  };
  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        digit: prevState.digit + 1,
      }));
    }, 1000);
  };

  render() {
    return (
      <div>
        {this.state.show && (
          <div className="globalStyle">
            <div>
              <h1>{this.state.Person.fullName}</h1>
              <h2>{this.state.Person.profession}</h2>
              <p>{this.state.Person.bio}</p>
            </div>
            <img src={this.state.Person.imgSrc} alt="Michael Jackson"></img>
            <br></br>
          </div>
        )}
        {/* Create a field that shows the time interval since the last component was mounted using the component lifecycle. */}
        <div className="Interval">
          Your Component was mounted <span>{this.state.digit} seconds</span> ago
        </div>

        <button onClick={this.handleShowPerson}>click here</button>
      </div>
    );
  }
}

export default App;
