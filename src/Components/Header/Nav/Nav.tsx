import React from 'react';
import s from './Nav.module.css'


type NavPropsType = {
    icon: string
    extra: string
}

export function Nav() {

    return (
        <div className={s.nav}>
            <a>Main</a>
            <a>Skills</a>
            <a>Works</a>
            <a>Contacts</a>
        </div>
    )
}