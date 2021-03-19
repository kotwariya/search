import React from 'react'
import JSONData from '../JSONData';
import {SearchRow} from './SearchRow';


function SearchList({search,selected}) {

    const searchWord = search.split(" "); 
    
    let selectedArray = selected.map(value=>value.name);
    
    let data = JSONData.sections[0].assets;
    
    search = search.replace( /(<([^>]+)>)/ig, '');
    
    let filterArray=data;
    let dataTemp=[];
    
    if(selectedArray.length > 0)
    {
    for(var i = 0;i<data.length;i++){
        
        for(var j=0;j<searchWord.length;j++){
         
            if(JSON.stringify(selectedArray).indexOf("title") > -1 && data[i].title.includes(searchWord[j])){
                dataTemp.push(data[i]);
                break;
            }
         
            if(JSON.stringify(selectedArray).indexOf("description") > -1 && JSON.stringify(data[i].description[0]).includes(searchWord[j])){
                dataTemp.push(data[i]);
                break;
            }
            if(JSON.stringify(selectedArray).indexOf("keywords") > -1 && JSON.stringify(data[i].keywords).includes(searchWord[j])){
                dataTemp.push(data[i]);
                break;
            }     
        }
        
    }
    filterArray=dataTemp;
    }
    
    return (
        <div className="music">
            {
            filterArray.map((asset)=>{
                  return  (<SearchRow key={asset.title} asset={asset}/>);
                })
                }
        </div>
    )
}

export default SearchList
