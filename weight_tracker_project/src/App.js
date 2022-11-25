import React, { useState } from 'react';
import DisplayEnteries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntryForm/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import "./App.css";

function App(){
    
    const [entries, setEntries] = useState([{weight:178, date: "11-24-2022"}])

    function addNewEntry(entry){
        let tempEntries = [...entries, entry];
        setEntries(tempEntries)
    }


    return (
    <div className="container-fluid">
        <div className='row'>
            <h3 style={{"margin": "1em"}}>Weight <small className='text-muted'>Tracker</small></h3>
            <div className='col-md-6'>
                <div className='border-box'>
                <DisplayEnteries parentEntries={entries}/>
                </div>        
                <div className='border-box'>
                <AddEntryForm addNewEntry={addNewEntry}/>
                </div>        
            </div>
            <div className='col-md-6'>
                <div className='border-box'>
                <EntriesChartTracker parentEntries={entries} />
                </div>
            </div>
        </div>
    </div>
    );
}

export default App;