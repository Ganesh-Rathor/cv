import React,{useContext,useEffect} from "react";
import CvContext from "../context/CvContext";
import Work from "./Work";
import "./work.css";
import Comment from "./Comment";
import Message from "./message";

const Portfolio = () => {
    const context = useContext(CvContext);
    const {getMessage,message} = context;

    useEffect(() => {
        getMessage();
      });
    
    return (
        
        <>
            <span className="anchor" id="home"></span>
            <div id="splash" className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1>Ganesh Rathor</h1>
                        <hr />
                        <p>
                            Full Stack Web Developer / Software Test Analyst
                        </p>
                        <p>
                            <a href="https://github.com/Ganesh-Rathor" ><i className="fa fa-github-square fa-2x"></i></a>
                            <a href="https://www.linkedin.com/in/ganesh-rathor-92388422b/" ><i className="fa fa-linkedin-square fa-3x"></i></a>
                            <a href="https://twitter.com/Ganesh57263610" ><i className="fa fa-twitter-square fa-2x"></i></a>
                        </p>
                    </div>
                </div>
            </div>
            <span className="anchor" id="portfolio-link"></span> 
            <div id="portfolio" className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1>Portfolio</h1>
                        <hr />
                        <div className="container-fluid">
                            <h3 className="work-head">Full Stack Projects (Database(mongoDB) + node(express) + React)</h3>
                            <div className="row">

                            <Work src={"home.png"} alt={"INotebook-your notes on cloud web app "} p={"Using React, MongoDB(mongoose) and Node.js(express) To build the Multipage website In thise website the SignUP  Login Delete Update and Create Facility also performed and the app is fully protected by token and Hasing Passward and API are also used"} git={"https://github.com/Ganesh-Rathor/INotebook.git"} link={"https://github.com/Ganesh-Rathor/INotebook.git"} />

                            <Work src={"bloag.png"} alt={"Simple Bloag Post website"} p={"Using Ejs(template), and Node.js(express) To build the Multipage blog Post website In thise website  Facility like creating a bloag on a specific route also performed . "} git={"https://github.com/Ganesh-Rathor/bloag-post.git"} link={"https://github.com/Ganesh-Rathor/bloag-post.git"} />

                            <Work src={"my.png"} alt={"MY Personal Portfolio website "} p={"Using Ract , MongoDB(mongoose) and Node.js(express) To build the Multipage Portfolio website In thise website  Facility like creating a message and send needu message on a specific route also performed And my personal api are also used. "} git={"https://github.com/Ganesh-Rathor/bloag-post.git"} link={"https://github.com/Ganesh-Rathor/bloag-post.git"} />

                            </div>

                            <h3>Advanced Frontend Projects (CSS(BootStrap) + JavaScript(Jquery) + React)</h3>

                            <div className="row">

                                <Work src={"jansevaweb.png"} alt={"MY Government Shope Website"} p={"Using React To build the Multipage website Without using React rout "} git={"https://github.com/Ganesh-Rathor/JansevaOnlineKendra.git"} link={"https://jansevaonlinekendra.netlify.app/"} />

                                <Work src={"comment.png"}
                                    alt={"Comment Section Challange"}
                                    p={"Using React To build the Comment Seaction page Thise Page has every facility that normal comment section have "}
                                    git={"https://github.com/Ganesh-Rathor/CommentSection.git"}
                                    link={"https://comment-section-react.netlify.app/"} />

                                <Work src={"rpcgame.png"}
                                    alt={"Rock-Paper-Sesor Game"}
                                    p={"Using HTML/css/JavaScript To build the Game This Game is Amazing web Game Take a trail "}
                                    git={"https://github.com/Ganesh-Rathor/Rock-paper-seccior-game.git"}
                                    link={"https://ganesh-rathor.github.io/Rock-paper-seccior-game/"} />

                                <Work src={"todo.png"}
                                    alt={"TODO web app Challange"}
                                    p={"Using HTML/css/JavaScript To build the todo app This web app is Amazing web app Take a trail "}
                                    git={"https://github.com/Ganesh-Rathor/Todo_app.git"}
                                    link={"https://ganesh-rathor.github.io/Todo_app/"} />

                                <Work src={"advice.png"}
                                    alt={"Random Advice web app (API)"}
                                    p={"Using HTML/css/JavaScript and API used To build the Advice Generator web app This web app is Amazing web app Take a trail "}
                                    git={"https://github.com/Ganesh-Rathor/random-advice-app.git"}
                                    link={"https://ganesh-rathor.github.io/random-advice-app/"} />

                                <Work src={"drum.png"}
                                    alt={"Playing Drum kit"}
                                    p={"Using HTML/css/JavaScript  used To build the Drum kit This drum web app is Amazing web app Take a trail "}
                                    git={"https://github.com/Ganesh-Rathor/Drum.git"}
                                    link={"https://ganesh-rathor.github.io/Drum/"} />

                                    <Work src={"more.png"}
                                    alt={"More Projects"}
                                    p={""}
                                    git={"https://ganesh-rathor.github.io/P/"}
                                    link={"https://ganesh-rathor.github.io/P/"} />

                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <a href="#message" className="btn btn-primary" tabIndex="-1">Go to Leave Review</a>
                </div>

                <div className="main-message-box" id="review" style={{margin:"4rem 0 7rem"}}>
                    <h1 id="rebox" className="h3 mb-5" style={{margin:"2rem 0 6rem 4rem" }}>Reviews By People</h1>
                {message.map((msg,i)=>{
                    
                    return (
                        <Message  message={msg} key={i} />
                    ) 
                })
                }
                </div>

                <Comment />
            </div>
            
            
            </>
    )
}
export default Portfolio;