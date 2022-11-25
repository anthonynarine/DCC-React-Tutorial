import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";


const EntriesChartTracker = (porps) => {

    const [chartdData, setChartData] = useState([])

    useEffect(() => {
        let tempChartData = porps.parentEntries.map(entry => {
            return [entry.date, entry.weight];

        });
        setChartData(tempChartData);      
    }, [porps.parentEntries])

    return (
        <Chart
        chartType="LineChart" 
        data={[["Date", "Weight"], ...chartdData]}
        width="100%"
        height="400px"
        legendToggle
        />
     );
}
 
export default EntriesChartTracker;

// Entries will be passed to EntriesChartTracker the same way we passed it to 
// DisplayEnteries