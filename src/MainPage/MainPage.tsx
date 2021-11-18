import React from "react";
import { WeatherHOC } from "../WeatherComponent";
import { Button } from "../Button";
import { TableForMainPage } from "../TableForMainPage";
import { Header } from "../Header";

interface MainPageState {
  searchValue: string
}

export class MainPage extends React.Component<{}, MainPageState> {
  state = {
    searchValue: "Minsk"
  };

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
        <Button onClick={this.onClickChangeToMinsk}>Minsk</Button>
        <Button onClick={this.onClickChangeToMoscow}>Moscow</Button>
        <Button onClick={this.onClickChangeToBratislava}>Bratislava</Button>
        <WeatherHOC
          q={this.state.searchValue}
          table={TableForMainPage}
          secondTable={false}
        />
      </div>
    );
  }
}
