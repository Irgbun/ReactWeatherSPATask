import React from "react";
import { WeatherHOC } from "../WeatherComponent";
import { Button } from "../Button";
import { TableForMainPage } from "../TableForMainPage";
import { Header } from "../Header";

interface MainPageState {
  searchValue: string | any,
  isChange: string
}

export class MainPage extends React.Component<{}, MainPageState> {
  state = {
    searchValue: "Minsk",
    isChange: "false"
  };

  onClickChangeToMinsk = () => {
    const { searchValue, isChange } = this.state
    this.setState({ searchValue: "Minsk" });
    this.setState({ isChange: "true" });
    localStorage.setItem('City', searchValue)
    localStorage.setItem('Change', isChange)
  };

  onClickChangeToMoscow = () => {
    const { searchValue, isChange } = this.state
    this.setState({ searchValue: "Moscow" });
    this.setState({ isChange: "true" });
    localStorage.setItem('City', searchValue)
    localStorage.setItem('Change', isChange)
  };

  onClickChangeToBratislava = () => {
    const { searchValue, isChange } = this.state
    this.setState({ searchValue: "Bratislava" });
    this.setState({ isChange: "true" });
    localStorage.setItem('City', searchValue)
    localStorage.setItem('Change', isChange)
  };

  componentDidMount() {
    const city = localStorage.getItem('City')
    const isChange = localStorage.getItem('Change')
    if (isChange === "true") {
      this.setState({ searchValue: city })
    } 
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
