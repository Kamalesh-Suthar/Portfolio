import React from 'react'
import classes from './EducationTimeline.module.css'

import { EducationDetails } from '../../Utilities/EducationDetails'

const EducationTimeline = () => {

    const GenerateTimeline = (details) => {
        return(
            <div className={classes.DetailsContainer}>
                <div className={classes.Pointer}></div>
                <div className={classes.SubContainer}>
                    <div className={classes.InstitutionName}>{details.nameOfTheInstitution}</div>
                    <div className={classes.BoardName}><span className={classes.TimelinePointer}></span>{details.board}</div>
                    <div className={classes.ClassesFrom}><span className={classes.TimelinePointer}></span>{details.classFrom}</div>
                    <div className={classes.YearOfJoining}><span className={classes.TimelinePointer}></span>{details.yearOfJoining}</div>
                </div>
            </div>
        )
    }

    return(
        <div className={classes.MainContainer}>
            {
                EducationDetails.map((data) => {
                    console.log(data)
                    return GenerateTimeline(data)
                })
            }
        </div>
    )
}

export default EducationTimeline;