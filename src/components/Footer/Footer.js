import React from 'react';
import s from './Footer.module.scss';
import FooterTittle from "./FooterTittle/FooterTittle";
import FooterRadio from "./FooterRadio/FooterRadio";
import FooterBtn from "./FooterBtn/FooterBtn";

const Footer = () => {
    return (
        <div>
            <FooterTittle/>
            <FooterRadio/>
            <FooterBtn/>
        </div>
    );
};

export default Footer;
