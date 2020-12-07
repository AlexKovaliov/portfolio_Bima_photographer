import React from 'react';
import {Title} from '../../common/generalsComponents/Title/Title';
import s from './WorksBlock.module.css'
import {Work} from './Work/Work';
import chips from '../../assets/img/img_works/chips.png'
import bread from '../../assets/img/img_works/bread.jpeg'
import cake from '../../assets/img/img_works/cake.jpeg'
import cookies from '../../assets/img/img_works/cookies.png'
import cutlery from '../../assets/img/img_works/cutlery.jpeg'
import doritos from '../../assets/img/img_works/doritos.png'
import fish from '../../assets/img/img_works/fish.jpeg'
import lemonade from '../../assets/img/img_works/lemonade.jpeg'


export function WorksBlock() {

    const imgChips = {
        backgroundImage: `url(${chips})`
    }
    const imgBread = {
        backgroundImage: `url(${bread})`
    }
    const imgCake = {
        backgroundImage: `url(${cake})`
    }
    const imgCookies = {
        backgroundImage: `url(${cookies})`
    }
    const imgCutlery = {
        backgroundImage: `url(${cutlery})`
    }
    const imgDoritos = {
        backgroundImage: `url(${doritos})`
    }
    const imgFish = {
        backgroundImage: `url(${fish})`
    }
    const imgLemonade = {
        backgroundImage: `url(${lemonade})`
    }


    return (
        <div className={s.worksBlock}>
            <div className={s.title}>
                <Title text={"My"} extraText={"portfolio"} backText={"works"}/>
            </div>
            <div className={s.cover}>
                <Work img={imgChips}/>
                <Work img={imgBread}/>
                <Work img={imgCake}/>
                <Work img={imgCookies}/>
                <Work img={imgCutlery}/>
                <Work img={imgDoritos}/>
                <Work img={imgFish}/>
                <Work img={imgLemonade}/>
            </div>
            <p>More my works you can see in my instagram </p>
        </div>
    )
}