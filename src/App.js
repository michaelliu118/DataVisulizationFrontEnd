import React from 'react';
import './App.css';


function App() {
  return (
    <div className='App'>
      <h1>This is the navigation page</h1>
      <div className='ButtonForApp'>
            <h2>Events verse hour</h2>
            <p>You'll be directed to the heatmap descripting number of events happened each hour</p>
            <button onClick={()=> window.open("https://eq-works-sample-michael.herokuapp.com/events/hourly", "_blank")}>
                EVENTS VS HOUR
            </button>
        </div>
        <div className='ButtonForApp'>
            <h2>Events verse day</h2>
            <p>You'll be directed to the plot descripting number of events happened each day</p>
            <button onClick={()=> window.open("https://eq-works-sample-michael.herokuapp.com/events/daily", "_blank")}>
                EVENTS VS DAY
            </button>
        </div>
        <div className='ButtonForApp'>
            <h2>Stats verse hour</h2>
            <p>You'll be directed to the heatmap descripting statistics corresponding to each hour</p>
            <button onClick={()=> window.open("https://eq-works-sample-michael.herokuapp.com/stats/hourly", "_blank")}>
                Stats VS HOUR
            </button>
        </div>
        <div className='ButtonForApp'>
            <h2>Stats verse day</h2>
            <p>You'll be directed to the heatmap descripting statistics corresponding to each day</p>
            <button onClick={()=> window.open("https://eq-works-sample-michael.herokuapp.com/stats/daily", "_blank")}>
                STATS VS DAY
            </button>
        </div>
        <div className='ButtonForApp'>
            <h2>Map based visualization</h2>
            <p>You can view the data at point of interest by hovering your mouse arrow on the pink dot</p>
            <button onClick={()=> window.open("https://eq-works-sample-michael.herokuapp.com/poi", "_blank")}>
                MAP BASED PLOT
            </button>
        </div>
    </div>
  );
}

export default App;
