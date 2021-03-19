import React from 'react'
import JSONData from '../JSONData';
import { Icon } from 'semantic-ui-react'

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
        <div class="music">
            {
            filterArray.map((asset)=>{
                  return  (<div className="song">
                                <div className="info">
                                    <div className="img first"/>
                                        <div className="titles">
                                            <h5><b>{asset.title}</b></h5>
					                        <p><i>{asset.supplement_information}</i></p>
                                            <p>{asset.description[0]}</p>
                                            <b style={{ 'text-decoration-line': 'underline',fontSize:'11px'}}>{'Play Vocal'}</b><br/>
                                            <b style={{ 'text-decoration-line': 'underline',fontSize:'11px', marginTop:'12px'}}>{'Lyrics(PDF)'}</b>
                                        </div>
                                    </div>
                                </div>)
                })
                }
        </div>
    )
}

export default SearchList
