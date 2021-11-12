import React from "react";

export const WithFetch = (Component, url) => {
  return class SomeClass extends React.Component {
    state = {
      data: [],
      isError: false,
      isLoading: false
    };

    getData = (params = {}) => {
      this.setState({ isLoading: true });
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
          this.setState({ isError: true });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    };
    render() {
      return (
        <Component
          data={this.state.data}
          isError={this.state.isError}
          isLoading={this.state.isLoading}
          fetchData={this.getData}
          {...this.props}
        />
      );
    }
  };
};
