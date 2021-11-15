import React from "react";
import { Input } from "../Input";
import { WeatherHOC } from "../WeatherComponent";
import { TableHourly } from "../TableHourly";
import { TableDaily } from "../TableDaily";
import { Header } from "../Header";

export class WeatherPage extends React.Component {
  state = {
    searchValue: "Minsk"
  };

  changeSearchValue = (event) => {
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
