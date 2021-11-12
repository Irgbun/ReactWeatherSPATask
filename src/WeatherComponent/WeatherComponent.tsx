import React from "react";
import { WithFetch } from "../WithFetch";

class WeatherComponent extends React.Component {
  state = {
    units: "metric",
    appId: ""
  };

  getData = () => {
    const { fetchData } = this.props;
    fetchData({ q: this.props.q, ...this.state, appId: this.props.token });
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.q !== prevProps.q) {
      this.getData();
    }
  }

  render() {
    const { data, isError, isLoading } = this.props;
    return (
      <div>
        {isError && <p>Что-то пошло не так</p>}
        {isLoading && !isError && <p>Загрузка</p>}
        {!isLoading && !isError && <this.props.table data={data} />}
        {!isLoading && !isError && (
          <this.props.table2 data={data} />
        )}
      </div>
    );
  }
}

const weatherAPIURL = "https://api.openweathermap.org/data/2.5/weather";

export const WeatherHOC = WithFetch(WeatherComponent, weatherAPIURL);
