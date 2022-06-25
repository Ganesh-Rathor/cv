import React from "react";
import "./skills.css";
import Skill from "../about/skill/Skill"

const Skills = ()=>{
    return (
        <>
            <div className="skills">
                <div className="img">
                    <img src={require('../../images/skill-img.jpg')} alt="" />
                </div>
                <div className="skill-side">
                    <div className="skill">
                        <Skill skill={"HTML/CSS (bootstrap)" } result={9.3} />
                        <p>2 Year Experience</p>
                    </div>
                    <div className="skill">
                        <Skill skill={"JavaScript + Jquerry"} result={9} />
                        <p>1.5 Year Experience</p>
                    </div>
                    <div className="skill">
                        <Skill skill={"React + Redux"} result={8} />
                        <p>1.5 Year Experience</p>
                    </div>
                    <div className="skill">
                        <Skill skill={"Node.js (Express.js)"} result={7} />
                        <p>1 Year Experience</p>
                    </div>
                    <div className="skill">
                        <Skill skill={"MongoDB (mongoose)"} result={6}/>
                        <p>6 months Experience</p>
                    </div>
                    <div className="skill">
                        <Skill skill={"Ethecal Haking"} result={5} />
                        <p>2 months Experience</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;