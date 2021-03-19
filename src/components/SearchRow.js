import React from 'react';

export const SearchRow = ({asset}) =>{
    return (
        <div className="song">
                                <div className="info">
                                    <div className="img first"/>
                                        <div className="titles">
                                            <h5><b>{asset.title}</b></h5>
					                        <p><i>{asset.supplement_information}</i></p>
                                            <p>{asset.description[0]}</p>
                                            <b style={{ 'textDecorationLine': 'underline',fontSize:'11px'}}>{'Play Vocal'}</b><br/>
                                            <b style={{ 'textDecorationLine': 'underline',fontSize:'11px', marginTop:'12px'}}>{'Lyrics(PDF)'}</b>
                                        </div>
                                    </div>
                                </div>
    );
}
