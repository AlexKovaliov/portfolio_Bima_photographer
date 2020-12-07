import React from 'react';
import s from './Title.module.css'

type TitlePropsType = {
    text: string
    extraText: string
    backText: string
}

export function Title(props: TitlePropsType) {

    return (
        <div className={s.title}>
            <h1>{props.text}
                <span className={s.extra}>{props.extraText}</span>
            </h1>
            <span className={s.back}>{props.backText}</span>
        </div>
    )
}