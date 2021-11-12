import css from "./TableForMainPage.css";

export function TableForMainPage(props) {
  return (
    <table>
      <tbody>
        <tr>
          <td>Temp Today</td>
          <td>Temp Tomorrow</td>
          <td>Temp Day After Tomorrow</td>
          <td>Temp Two Day After Tomorrow</td>
        </tr>
        <tr>
          <td>{props.data.name}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
        </tr>
      </tbody>
    </table>
  );
}
