import React from 'react'
import classes from './Landing.module.css'
import { Description } from '../../Utilities/Constants'
import { Link } from 'react-router-dom'
import Typed from 'react-typed'

import { MyDescp } from '../../Utilities/Constants'
import MyImage from '../../assets/Myself.JPG'

const Landing = () => {

    return(
        <div className={classes.MainContainer}>
            <div className={classes.LeftSection}>
                <img className={classes.MainImage} src={MyImage} alt={"Profile"} />
            </div>
            <div className={classes.RightSection}>
                <p className={classes.HelloText}>Hello,</p>
                <p className={classes.NameTextContainer}>
                    I'm {''}  {'\n'}
                    <Typed className={classes.NameText}
                        strings={MyDescp}
                        typeSpeed={120}
                        loop={true}
                    />
                </p>
                <p className={classes.DescriptionText}>{Description}</p>
                <Link to={'/about'}>
                    <button className={classes.PrimaryButton} type={'none'}>
                        <Typed 
                            strings={['Know More About Me']}
                            typeSpeed={300}
                            loop={false}
                        />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Landing