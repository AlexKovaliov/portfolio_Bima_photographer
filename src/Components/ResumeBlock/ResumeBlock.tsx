import React from 'react';
import {Title} from '../../common/generalsComponents/Title/Title';
import s from './ResumeBlock.module.css'

export function ResumeBlock() {

    return (
        <div className={s.resumeBlock}>
            <div className={s.title}>
                <Title text={"About"} extraText={"me"} backText={"resume"}/>
            </div>
        </div>
    )
}