import React from "react";

export const WithFetch = (Component, url) => {
  return class SomeClass extends React.Component {
    state = {
      data: [],
      loadStatus: "unknown"
    };

    getData = (params = {}) => {
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
