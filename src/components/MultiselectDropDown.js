import { Multiselect } from 'multiselect-react-dropdown';
import {useState,useEffect} from 'react';


export const MultiselectDropDown = ({setFilter}) =>{

const[data] = useState(
    [{name: 'title', id: 1},
    {name: 'description', id: 2},
    {name: 'keywords', id: 3},
    {name: 'All', id: 4}]);
const[selected,setSelected] = useState([]);

useEffect(()=>{
    setFilter(selected)
    
},[selected,setFilter])
    return(
        <Multiselect
        options={data} 
        selectedValues={selected} 
        onSelect={onSelect} 
        onRemove={onRemove} 
        displayValue="name" 
        showCheckbox={true}
    />
    );

    function onSelect(selectedList, selectedItem) {
        if(selectedItem.name === "All" || (selectedList.length ===3 && selectedItem.name !== "All")){
            setSelected([{name: 'title', id: 1},
            {name: 'description', id: 2},
            {name: 'keywords', id: 3},
            {name: 'All', id: 4}]);
        }else{
            setSelected(selectedList);
        }
        
    }
    
    function  onRemove(selectedList, removedItem) {
        if(selectedList.length === 3 && removedItem.name !== "All" ){
            setSelected(selectedList.filter(item=>item.name !== 'All'));
        }
        else if(removedItem.name === "All"){
            setSelected([]);
        }else{
            setSelected(selectedList);
        }
    }


}





