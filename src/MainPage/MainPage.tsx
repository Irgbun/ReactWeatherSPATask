import React from "react";
import { WeatherHOC } from "../WeatherComponent";
import { Button } from "../Button";
import { TableForMainPage } from "../TableForMainPage";
import { Header } from "../Header";
import { Input } from "../Input";

export class MainPage extends React.Component {
  state = {
    searchValue: "Minsk",
    token: ""
  };

  changeToken = (event) => this.setState({ token: event.target.value });

  onClickChangeToMinsk = () => {
    this.setState({ searchValue: "Minsk" });
  };

  onClickChangeToMoscow = () => {
    this.setState({ searchValue: "Moscow" });
  };

  onClickChangeToBratislava = () => {
    this.setState({ searchValue: "Bratislava" });
  };

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Input value={this.state.token} onChange={this.changeToken} />
        </div>
        <Button onClick={this.onClickChangeToMinsk}>Minsk</Button>
        <Button onClick={this.onClickChangeToMoscow}>Moscow</Button>
        <Button onClick={this.onClickChangeToBratislava}>Bratislava</Button>
        <WeatherHOC
          q={this.state.searchValue}
          token={this.state.token}
          table={TableForMainPage}
        />
      </div>
    );
  }
}
