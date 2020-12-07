import React from 'react';
import {Nav} from "./Nav/Nav";
import s from "./Nav/Nav.module.css";
import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <div className={s.header}>
            <Nav/>
        </div>
    )
}