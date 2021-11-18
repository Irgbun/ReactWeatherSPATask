import React from "react";

interface SomeClassState<D> {
  data: D[];
  loadStatus: string;
}

type fetchData = (params?: Record<string, string>) => void;

export const WithFetch = <
  Props extends React.PropsWithChildren<Record<string, any>>,
  Data
>(
  Component: React.JSXElementConstructor<
    Props & {
      data: Data[];
      loadStatus: string;
      fetchData: fetchData;
    }
  >,
  url: string
) => {
  return class SomeClass extends React.Component<Props, SomeClassState<Data>> {
    state: SomeClassState<Data> = {
      data: [],
      loadStatus: "unknown"
    };

    getData: fetchData = (params = {}) => {
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
