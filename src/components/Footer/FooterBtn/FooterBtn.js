import React from 'react';
import s from './FooterBtn.module.scss';

const FooterBtn = () => {
    return (
        <div className={s.FooterBtn}>
            <a href="#">Back</a>
            <button>
                Next
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.7097 0.387101L7.79289 0.292893C8.15338 -0.0675907 8.72061 -0.0953203 9.1129 0.209705L9.20711 0.292893L12.2071 3.29289L12.2485 3.33685L12.3037 3.40469L12.3753 3.51594L12.4288 3.62866L12.4642 3.73401L12.4931 3.8819L12.5 4L12.4972 4.07524L12.4798 4.20073L12.4503 4.31214L12.4063 4.42322L12.354 4.52071L12.2803 4.62545L12.2071 4.70711L9.20711 7.70711C8.81658 8.09763 8.18342 8.09763 7.79289 7.70711C7.43241 7.34662 7.40468 6.77939 7.7097 6.3871L7.79289 6.29289L9.085 5H1.5C0.947715 5 0.5 4.55228 0.5 4C0.5 3.44772 0.947715 3 1.5 3H9.085L7.79289 1.70711C7.43241 1.34662 7.40468 0.779392 7.7097 0.387101L7.79289 0.292893L7.7097 0.387101Z" fill="white"/>
                </svg>

            </button>
        </div>
    );
};

export default FooterBtn;
