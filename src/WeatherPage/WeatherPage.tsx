import React from "react";
import { Input } from "../Input";
import { WeatherHOC } from "../WeatherComponent";
import { TableHourly } from "../TableHourly";
import { TableDaily } from "../TableDaily";
import { Header } from "../Header";


interface WeatherPageState {
  searchValue: string
}


export class WeatherPage extends React.Component<{}, WeatherPageState> {
  state = {
    searchValue: "Minsk"
  };

  changeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Input
            value={this.state.searchValue}
            onChange={this.changeSearchValue}
          />
          <WeatherHOC
            q={this.state.searchValue}
            table={TableHourly}
            table2={TableDaily}
            secondTable={true}
          />
        </div>
      </div>
    );
  }
}
