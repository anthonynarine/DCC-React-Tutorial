import React, { useState } from 'react';
import DisplayEnteries from './Components/DisplayEntries/DisplayEntries';


function App(){
    
    const [entries, setEntries] = useState([{weight:178, date: "11-24-2022"}])


    return (
    <div>
        <DisplayEnteries parentEntries={entries}/>

    </div>
    );
}

export default App;