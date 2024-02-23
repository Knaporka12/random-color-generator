import Header from "./Header";
import Generator from "./Generator";
import { useContext } from "react"
import DataContext from "./Context/DataContext"


function App() {

  const {color} = useContext(DataContext);

  return (

    <div className="App" style={{backgroundColor: color}}>

      <Header></Header>
      <Generator></Generator>

    </div>

  );

}

export default App;
