import React from "react";
import { Input } from "../Input";
import { WeatherHOC } from "../WeatherComponent";
import { TableHourly } from "../TableHourly";
import { TableDaily } from "../TableDaily";
import { Header } from "../Header";

export class WeatherPage extends React.Component {
  state = {
    searchValue: "Minsk",
    token: "",
  };

  changeToken = (event) => {
    this.setState({ token: event.target.token })
  }

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
          <Input value={this.state.token} onChange={ this.changeToken } />
        </div>
        <div>
          <Input
            value={this.state.searchValue}
            onChange={this.changeSearchValue}
          />
          <WeatherHOC
            q={this.state.searchValue}
            token={this.state.token}
            table={TableHourly}
            table2={TableDaily}
          />
        </div>
      </div>
    );
  }
}
