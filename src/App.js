import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React JS
        </p>
        <table width="100%" border="2px" height="500px">
          <tbody>
            <tr height="20%">
              <td><h1>This is customer HEADER Part</h1></td>
            </tr>
            <tr height="70%">
            <td><h1>This is customer INFO Part</h1></td>
            </tr>
            <tr height="10%">
            <td><h1>This is customer FOOTER Part</h1></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
