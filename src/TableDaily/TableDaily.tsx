import css from "./TableDaily.css";

interface TableDailyProps {
  data: { main: { temp: number } }[]
}


export const TableDaily: React.FC<TableDailyProps> = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Temp Today</td>
          <td>Temp Tomorrow</td>
          <td>Temp Third Day</td>
          <td>Temp Fours Day</td>
          <td>Temp Fifth Day</td>
          <td>Temp Sixth Day</td>
          <td>Temp Seventh Day</td>
          <td>Temp Eighth Day</td>
          <td>Temp Ninth Day</td>
          <td>Temp Tenth Day</td>
        </tr>
        <tr>
          <td>{props.data[0].main.temp}</td>
          <td>{props.data[0].main.temp}</td>
          <td>{props.data[0].main.temp}</td>
          <td>{props.data[0].main.temp}</td>
          <td>{props.data[0].main.temp}</td>
          <td>{props.data[0].main.temp}</td>
          <td>{props.data[0].main.temp}</td>
          <td>{props.data[0].main.temp}</td>
          <td>{props.data[0].main.temp}</td>
          <td>{props.data[0].main.temp}</td>
        </tr>
      </tbody>
    </table>
  );
}
