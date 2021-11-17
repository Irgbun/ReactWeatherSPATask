import React from "react";


interface SomeClassState {
  data: { coord: object, weather: [], main: object, name: string }[],
  loadStatus: string
} 

interface WithFetchProps {
  fetchData: (params: Record<string, string>) => void
}


export const WithFetch: WithFetchProps['fetchData'] = <Props extends Record<string, any>, Data>(Component: React.JSXElementConstructor<Props & {
  data: Data, 
  loadStatus: string, 
  fetchData: (params: Record<string, string>) => void
}>, 
url: string) => {
  return class SomeClass extends React.Component<{}, SomeClassState> {
    state = {
      data: [],
      loadStatus: "unknown"
    };

    getData = (params: Record<string, string> = {}) => {
      this.setState({ loadStatus: "loading" });
      const par = new URLSearchParams(params).toString();
      fetch(`${url}?${par}`)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
          throw new Error("Не работает!");
        })
        .then((data) => {
          this.setState({ data });
        })
        .catch(() => {
          this.setState({ loadStatus: "error" });
        })
        .finally(() => {
          this.setState({ loadStatus: "loaded" });
        });
    };
    render() {
      return (
        <Component
          data={this.state.data}
          loadStatus={this.state.loadStatus}
          fetchData={this.getData}
          {...this.props}
        />
      );
    }
  };
};
