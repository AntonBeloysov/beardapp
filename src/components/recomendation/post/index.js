import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import '../../../index.css';

const anchors = ["firstPage", "secondPage", "thirdPage"];

const Post = ({ 
    isViewPost,
    response,
 }) => (
  <ReactFullpage
    anchors={anchors}
    render={() => {
        return (
            <div>
                <div onClick={isViewPost} className="content-card text-section__blog section">
                    <div>
                        <div className="blog-card">
                            <div className="content-parent__card">
                                <div className="content-text__card">
                                    <div className="top-card__content">
                                        <img className="ico-img__card" src="/img/icon people/ico.jpg" alt="" />
                                        <h1 className="title__content-card">hi, This is my first post in...</h1>
                                    </div>
                                    <div className="bottom-card__content">
                                        <h1 className="description">{response}...</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="active__card-block">
                            <button className="card__comments"></button>
                            <button id="heart" className="card__heart"></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }}
  />
);
export default Post;