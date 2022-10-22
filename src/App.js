import React, { useEffect, useState } from "react";
import './App.css';
import {Data} from "./Data";

const Color = [

     "#FFCC00",
     "#A0B0B9"  
]
function App() {

  const [active, setActive] = useState(2);
  const [isActive, setIsActive] = useState(false);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    setIsActive(current => !current);
    if (index !== active) {
      setActive(index);
    } 
  };

  const newColor = Data.errors_yesterday.map((item, i)=>({...item, Data: Color[i]}));

console.log(Data)
  
  return (
    <div className="App">
      <h1 className='Header'>
        Main metrics 
      </h1>

      <div className='Resolution_Tabs'>
        <button className='Tab' onClick={handleClick}  id={0}>
          Last hour
        </button>
        <button className='Tab2' onClick={handleClick}  id={1}>
          Today
        </button>
        <button className='Tab2' onClick={handleClick}  id={2}  style={{
          backgroundColor: isActive ? '#2196F3' : '#2196F3',
          color: isActive ? 'white' : 'white',
        }}>
          Yesterday
        </button>
        <button className='Tab3' onClick={handleClick}  id={3}>
          Last 3 days
        </button>
      </div>

      <>
      <div  className={ active === 0 ? "display show" : "display" }>
         
      </div>
        <div className={ active === 1 ? "display show" : "display" }>
         
        </div>
        <div  className={ active === 2? "display show" : "display" }>
          {Data.data.map((item, index) => (
            <div key={index} className="container">
              <div className="percent">
                <div className="error">
                  <div className="dots"></div>
                  <div className="error-result">
                    <h2>Errors: <span>{item.errors_yesterday.toFixed(2)}</span>%</h2>
                    <span> Average: 0.11%</span>
                  </div>
                </div>
                <div className="error">
                  <div className="dots"></div>
                  <div className="error-result">
                    <h2>Zeroes: <span>{item.zeroes_yesterday.toFixed(2)}</span>%</h2>
                    <span> Average: 0.11%</span>
                  </div>
                </div>
          
                <div className="error">
                  <div className="dots"></div>
                  <div className="error-result">
                    <h2>Timeouts: <span>{item.timeout_yesterday.toFixed(2)}</span>%</h2>
                    <span> Average: 0.11%</span>
                  </div>
                </div>
              </div>
             
              <div className="chart" key={index}>
                  <div className="chart1" >
                    <div className="first"></div>
                    <div className="second"></div>
                  </div>
                    <div className="Box">
                    {newColor.map((item, index) => (
                      <div key={index} className="chartBox">
                        <div style={{ background: item.Data, height: "10px", width: "10px", borderRadius:"2px" }}></div>
                        <div key={index}>{item.code === null ? "Other" : "Error"} {item.code}: {item.count} </div>
                      </div>
                      ))}
                    </div> 
              </div>
                      
              <div className="steps">
              <div>
                <div className="firstSteps">
                  <div className="image">
                    <img src="svg/Group 28.svg" alt=""/>
                  </div>
                  <div className="stepCon">
                      <h2> Searches <span>+{item.gate_id}%</span></h2>
                      <div className="searchFigure">
                        <h3>{item.searches_current_yesterday}</h3>
                        <span> Yesterday </span>
                      </div>
                      <div className="searchFigure2">
                        <h3>{item.searches_previous_yesterday}</h3>
                        <span>Last friday</span>
                      </div>
                  </div>

                  <div className="trafficsCon">
                      <div className="trafficPercent">
                        <h3>Mobile Traffic: {item.mobile_pessimizer.toFixed(2)}%</h3>
                        <h3>Web Traffic: {item.web_pessimizer}%</h3>
                      </div>
                      <span>
                      You get 100% traffic on mobile and desktop devices.
                      </span>
                      <div className="trafficDes">Help: <span>Searches, Pessimisation</span></div>
                  </div>
                </div>
                <hr className="line"></hr>
              </div>

              <div className="Second">
                <div className="firstSteps">
                  <div className="image2">
                    <img src="svg/Group 11.svg" alt=""/>
                  </div>
                  <div className="stepCon2">
                      <h2> Clicks <span>+{item.zeroes_yesterday.toFixed(2)}%</span></h2>
                      <div className="searchFigure">
                        <h3>{item.clicks_current_yesterday}</h3>
                        <span> Yesterday </span>
                      </div>
                      <div className="searchFigure2">
                        <h3>{item.clicks_previous_yesterday}</h3>
                        <span>Last friday</span>
                      </div>
                  </div>

                  <div className="trafficsCon">
                      <div className="trafficPercent2">
                        <h3>CTR: {item.ctr_yesterday.toFixed(2)}%</h3>
                      </div>
                      <span>
                      Conversion from searches  to clicks on all devices.
                      </span>
                      <div className="trafficDes">Help: <span>CTR, Cliks</span></div>
                  </div>
                </div>
                <hr className="line"></hr>
              </div>
              <div className="third">
                <div className="firstSteps">
                  <div className="image3">
                    <img src="svg/Group 11 (1).svg" alt=""/>
                  </div>
                  <div className="stepCon">
                      <h2> Sales <span></span></h2>
                      <div className="searchFigure">
                        <h3>{item.bookings_current_yesterday}</h3>
                        <span> Yesterday </span>
                      </div>
                      <div className="searchFigure2">
                        <h3>{item.bookings_previous_yesterday}</h3>
                        <span>Last friday</span>
                      </div>
                  </div>

                  <div className="trafficsCon">
                      <div className="trafficPercent">
                        <h3>STR: {item.str_yesterday.toFixed(2)}%</h3>
                        <h3>Avg. Check: {item.avg_price_yesterday.toFixed(2)}%</h3>
                      </div>
                      <span>
                      You get 100% traffic on mobile and desktop devices.
                      </span>
                      <div className="trafficDes">Help: <span>STR, Bookings, Avg. Check</span></div>
                  </div>
                </div>
              </div>
               
                
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}

export default App;
