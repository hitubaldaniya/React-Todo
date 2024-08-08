import Header from "./components/Header";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Todo />
      </div>
    </div>
  );
}

export default App;
