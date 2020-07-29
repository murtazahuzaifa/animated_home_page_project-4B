import React from 'react';
import style from './style/Header.module.css';
import lottieAnimation from '../components/LottieAnimation';

const loadTruckMovingAnim = {
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: require('../animations/truckMoving.json'),
}

export default function () {

    return (
        <div className={style.container}>
            <div className={style.animationLogo} >
                <lottieAnimation.AnimElem starter={loadTruckMovingAnim} />
            </div>
            <h2>Courier Service Sample</h2>
        </div>
    );
}