import './App.css';
import {MultiselectDropDown} from './components/MultiselectDropDown';
import SearchList from './components/SearchList';
import {useState} from 'react';
function App() {
  
  const[value,setValue] = useState('');
  const[filterVaue,setFilterValue]=useState([]);

  function setFilter(arr){
    setFilterValue(arr);
  }

  return (
    <div className="App">
      <div className="container-display">
      <input type="text" placeholder="Type Here..." onChange={(e)=>setValue(e.target.value)} value={value}/>
      <MultiselectDropDown setFilter={setFilter}/>
      </div>
      <SearchList search={value} selected={filterVaue}/>
    </div>
  );
}

export default App;
