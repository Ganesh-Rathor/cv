import React from "react";
import "./work.css";

const Work = (props) => {
    const {git,link,alt,p,src} = props;
    return (
        <>
            <div className="col-lg-4 work-main">
                <div className="thumbnail">
                    <a href={link}>
                        <div className="thumbnail-hover text-center">
                            <i className="fa fa-eye fa-4x"></i>
                        </div>
                        <img className="img-responsive" src={require(`../../images/${src}`)} alt={alt} />
                    </a>
                    <div className="caption">
                        <h3>{alt} <a href={git} ><i className="fa-brands fa-github"></i></a></h3>
                        <p>{p}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work;