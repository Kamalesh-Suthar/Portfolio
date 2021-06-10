import React from 'react'
import classes from './WhyProgramming.module.css'

import { ProgrammingBecause } from '../../Utilities/ProgrammingDetails'

const WhyProgramming = () => {

    return(
        <div className={classes.MainContainer}>
            <p className={classes.QuestionText}>Why choose Programming?</p>
            <p className={classes.AnswerText}>{ProgrammingBecause}</p>
        </div>
    )
}

export default WhyProgramming;