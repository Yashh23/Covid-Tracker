import React, { useEffect, useState } from "react";
import "./LiveData.css";
const LiveData = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise[0]);
    setData(actualData.statewise[0]);
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="g">
          <div className="g-item g-item-r">
            <div className="ca">
              <div className="ca-content">
                <h1 className="ca-header">RECOVERED</h1>
                <p>{data.recovered}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="g">
          <div className="g-item">
            <div className="ca">
              <div className="ca-content">
                <h1 className="ca-header">CONFIRMED</h1>
                <p>{data.confirmed}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="g">
          <div className="g-item g-item-d">
            <div className="ca">
              <div className="ca-content">
                <h1 className="ca-header">DEATHS</h1>
                <p>{data.deaths}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="g">
          <div className="g-item">
            <div className="ca">
              <div className="ca-content">
                <h1 className="ca-header">ACTIVE</h1>
                <p>{data.active}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="g">
          <div className="g-item">
            <div className="ca">
              <div className="ca-content">
                <h1 className="ca-header">
                  <span>LAST </span>UPDATED
                </h1>
                <p>{data.lastupdatedtime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveData;
