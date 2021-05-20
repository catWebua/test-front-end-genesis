import React from 'react';
import s from './FooterRadio.module.scss';

const FooterRadio = () => {
    return (
        <div className={s.FooterRadio}>
            <label><input type="radio" checked='checked'/>1 column: both positive and negative numbers</label>
            <label><input type="radio"/>2 columns: separate positive and negative numbers</label>
        </div>
    );
};

export default FooterRadio;
