import React from "react";
import { WithFetch } from "../WithFetch";

interface WeatherComponentProps {
  fetchData: (q: string, appId: string) => React.ReactNode,
  data: { coord: object, weather: [], main: object, name: string }[],
  loadStatus: string,
  secondTable: boolean,
  q: string,
  table: React.JSXElementConstructor<{ data: { coord: object, weather: [], main: object, name: string }[] }>,
  table2: React.JSXElementConstructor<{ data: { coord: object, weather: [], main: object, name: string }[] }>,
}

interface WeatherComponentState {
  units: string,
  appId: string
}

class WeatherComponent extends React.Component<WeatherComponentProps, WeatherComponentState> {
  state = {
    units: "metric",
    appId: ""
  };

  getData = () => {
    const { fetchData } = this.props;
    const token = process.env.REACT_APP_OPEN_WEATHER_TOKEN;
    fetchData({ q: this.props.q, ...this.state, appId: token });
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps: {q: string}) {
    if (this.props.q !== prevProps.q) {
      this.getData();
    }
  }

  render() {
    const { data, loadStatus } = this.props;
    return (
      <div>
        {loadStatus === "error" && <p>Что-то пошло не так</p>}
        {loadStatus === "loading" && <p>Загрузка</p>}
        {loadStatus === "loaded" && <this.props.table data={data} />}
        {loadStatus === "loaded" && this.props.secondTable && (
          <this.props.table2 data={data} />
        )}
      </div>
    );
  }
}

const weatherAPIURL = "https://api.openweathermap.org/data/2.5/weather";

export const WeatherHOC = WithFetch(WeatherComponent, weatherAPIURL);
