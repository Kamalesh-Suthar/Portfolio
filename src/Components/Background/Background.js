import React from 'react'
import classes from './Background.module.css'

import { WhoAmI , IAm , IAmFrom } from '../../Utilities/BackgroundDetails'

const Background = () => {
    
    return(
        <div className={classes.MainContainer}>
            <div className={classes.WhereFromContainer}>
                {WhoAmI}
            </div>
            
            <div className={classes.DetailsContainer}>
                {IAm} {' \n'}
                {IAmFrom}
            </div>
            <div className={classes.PlaceContainer}>
                <img className={classes.Places} src={'https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2018/07/How-to-Plan-Family-Friendly-Hioliday-Trip-to-Rajasthan.jpg'} alt={'Rajasthan'} />
                <img className={classes.Places} src={'https://pix10.agoda.net/geo/city/4923/1_4923_02.jpg?s=1920x822'} alt={'Bangalore'} />
            </div>
        </div>
    )
}

export default Background;