"use client";
import TabInfoApi from "@/utils/TabsInfo"
import { useState } from "react";

const Home = () => {
  const [tabInfo, setTabInfo] = useState(TabInfoApi);
  const[filterTabInfo, setFilterTabInfo] = useState(TabInfoApi);

  const hanldeBtn = (name) =>{
    setFilterTabInfo(tabInfo.filter((curElmnt)=>{
      return curElmnt.name === name;
    }))
  };

  return (
    <main>
      <div className="left">
        <button className='btn' onClick={() => hanldeBtn("TOMMY")}>Tommy</button>
        <button className='btn'onClick={() => hanldeBtn("BIGDROP")}>bigDrop</button>
        <button className='btn'onClick={() => hanldeBtn("CUKER")}>Cuker</button>
      </div>
      <div className="right">
        <div className="container">
          {
            filterTabInfo.slice(0,1).map((curElmnt) => {
              const{id,heading,name,date,para1,para2,para3} = curElmnt;
              return (
                <div key={curElmnt.id}>
                  <h2>{heading}</h2>
                  <button>{name}</button>
                  <h5>{date}</h5>
                  <div className="para">
                    <span>&gt;&gt;</span>
                    <p> {para1}</p>
                  </div>
                  <div className="para">
                    <span>&gt;&gt;</span>
                    <p> {para2}</p>
                  </div>
                  <div className="para">
                    <span>&gt;&gt;</span>
                    <p> {para3}</p>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </main>
  )
}

export default Home
