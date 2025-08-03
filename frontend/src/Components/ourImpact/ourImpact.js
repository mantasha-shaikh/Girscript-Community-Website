import "./ourImpact.css";
import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { data01 } from "../../Test_data/ourImpactPiChartData.js";
import { Link } from "react-router-dom";

const OurImpact = () => {
  return (
    <div> 
      <h1 className="our_impact"><b>OUR IMPACT</b></h1>
      
      <div className="our_impact_outerdiv">
        
        <Link to="/learn">
          <div className="hover_effect1">
            <b>Learn More</b>
          </div>
        </Link>
        
        <div className="our_impact_div1">
          {[...Array(5)].map((_, index) => (
            <div key={index} className={`our_impact_div1${index+1} our_impact_innerdiv`}>
              <b>25K</b><br/>Students
            </div>
          ))}
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
        </div>
        
        <Link to="/learn">
          <div className="hover_effect2">
            <b>Learn More</b>
          </div>
        </Link>
        
        <div className="our_impact_div2">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#9844d8" />
            </PieChart>
          </ResponsiveContainer>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
        </div>

      </div>
    </div>
  );
};

export default OurImpact;
