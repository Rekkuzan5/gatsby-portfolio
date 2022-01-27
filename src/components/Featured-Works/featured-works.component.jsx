import React from "react";
import { container, content, grid, grid_item, picture, info } from './featured-works.module.scss';

const FeaturedWorks = () => (
    <div className={container}>
        <div className={content}>
            <h1>Featured Works.</h1>
            <div className={grid}>
                <div className={grid_item}>
                    <div className={picture}></div>
                    <div className={info}>
                        <h3>Crown Clothing</h3> 
                        <a href='https://github.com/Rekkuzan5/crwn-clothing' target="_blank">Source Code</a>
                    </div> 
                </div>
                
            <div className={grid_item}>
                <div className={picture}></div>
                    <div className={info}>
                        <h3>Project Two</h3> 
                        <a href='*'>Source Code</a>
                    </div> 
                </div>
            </div>
        </div>
    </div>
)

export default FeaturedWorks;