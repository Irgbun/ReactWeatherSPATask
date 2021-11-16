import css from "./TableHourly.css";

interface TableHourlyProps {
  data: { coord: object, weather: [], main: { temp: number }, name: string }
}

export const TableHourly: React.FC<TableHourlyProps> = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
        </tr>
        <tr>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
          <td>{props.data.main.temp}</td>
        </tr>
      </tbody>
    </table>
  );
}
