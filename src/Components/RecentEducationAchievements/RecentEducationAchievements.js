import React from 'react'
import classes from './RecentEducationAchievements.module.css'

import { EducationalMilestones } from '../../Utilities/EducationDetails'

const RecentEducationAchievements = () => {

    const GenerateDetails = (data) => {
        return(
            <div className={classes.DetailsContainer}>
                <div className={classes.DegreeObtainedText}>{data.degreeObtained}</div>
                <div className={classes.SubContainer}>
                    <div className={classes.SubText}><span className={classes.Pointer}></span>{data.yearOfPassing}</div>
                    <div className={classes.SubText}><span className={classes.Pointer}></span>{data.board}</div>
                    <div className={classes.SubText}><span className={classes.Pointer}></span>{data.percentageObtained}</div>
                    <div className={classes.SubText}><span className={classes.Pointer}></span>{data.marksObtained}</div>
                </div>
            </div>
        )
    }

    return(

    <div className={classes.MainContainer}>
        {
            EducationalMilestones.map((details) => GenerateDetails(details))
        }
    </div>
    )
}

export default RecentEducationAchievements;