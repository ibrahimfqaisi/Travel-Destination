
import './App.css';
import Home from './Components/home/Home';
const memesData = require("./data/db.json")
function App() {

  return (
    <>

      <Home memesData={memesData} />
    </>
  );
}

export default App;
