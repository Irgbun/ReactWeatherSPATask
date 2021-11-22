import React from "react";
import { WeatherHOC } from "../WeatherComponent";
import { Button } from "../Button";
import { TableForMainPage } from "../TableForMainPage";
import { Header } from "../Header";

interface MainPageState {
  searchValue: string | any
}

export class MainPage extends React.Component<{}, MainPageState> {
  state = {
    searchValue: "Minsk"
  };

  onClickChangeToMinsk = () => {
    const { searchValue } = this.state
    this.setState({ searchValue: "Minsk" });
    localStorage.setItem('City', searchValue)
  };

  onClickChangeToMoscow = () => {
    const { searchValue } = this.state
    this.setState({ searchValue: "Moscow" });
    localStorage.setItem('City', searchValue)
  };

  onClickChangeToBratislava = () => {
    const { searchValue } = this.state
    this.setState({ searchValue: "Bratislava" });
    localStorage.setItem('City', searchValue)
  };

  componentDidMount() {
    const city = localStorage.getItem('City')
    this.setState({ searchValue: "Minsk" | city })
  }

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
        />
      </div>
    );
  }
}
