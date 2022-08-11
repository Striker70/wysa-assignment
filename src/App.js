import './App.css';
import {useEffect,useState} from "react";
import axios from "axios";
export default function App() {
  const [show, setshow] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:8080/getusers")
    .then((res) => setshow(res.data));
}, []);
  return (
    <div className="App">
      <div><u>Fetching backend data</u></div>
      <div>
      <div>
        {show.map((e) => (
          <div>
            <img src={e.avatar}/>
          <h2>{e.first_name}</h2>
          <h2>{e.lastname}</h2>
          <h2>{e.email}</h2>
          </div> 
        ))}
      </div>
      </div>
    </div>
  );
}
