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
                        <h3>Project One</h3> 
                        <p>Link</p>
                    </div> 
                </div>
                
            <div className={grid_item}>
                <div className={picture}></div>
                    <div className={info}>
                        <h3>Project Two</h3> 
                        <p>Link</p>
                    </div> 
                </div>
            </div>
        </div>
    </div>
)

export default FeaturedWorks;