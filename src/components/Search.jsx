import { useState } from "react";
export default function Search({ filterHeroes, changeFilter }){

    
 
    return(
        <>
    <label>
                    Busca el nombre de tu SuperHeroe
                    <input
                        type="text"
                        placeholder="Iron man, Thor, Superman..."
                        value={filterHeroes}
                        onChange={(e)=>{
                            changeFilter(e.target.value)
                        }}


                    />
                </label>
        </>
    )
}