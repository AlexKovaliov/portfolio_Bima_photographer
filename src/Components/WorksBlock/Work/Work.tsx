import React from 'react';
import s from './Work.module.css'


export type WorkType = {
    img: { backgroundImage: string }
}

export function Work (props: WorkType) {

    return (
        <div className={s.work}>
            <div className={s.img} style={props.img}></div>
        </div>
    )
}