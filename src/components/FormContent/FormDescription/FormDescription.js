import React from 'react';
import s from './FormDescription.module.scss';

const FormDescription = () => {
    return (
        <div className={s.FormDescription}>
            <h4>Description</h4>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M6.7903 4.3871L6.70711 4.29289C6.34662 3.93241 5.77939 3.90468 5.3871 4.2097L5.29289 4.29289L2.29289 7.29289L2.2515 7.33685L2.19633 7.40469L2.12467 7.51594L2.07123 7.62866L2.03585 7.73401L2.00691 7.8819L2 8L2.00279 8.07524L2.02024 8.20073L2.04974 8.31214L2.09367 8.42322L2.146 8.52071L2.21969 8.62545L2.29289 8.70711L5.29289 11.7071C5.68342 12.0976 6.31658 12.0976 6.70711 11.7071C7.06759 11.3466 7.09532 10.7794 6.7903 10.3871L6.70711 10.2929L5.415 9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H5.415L6.70711 5.70711C7.06759 5.34662 7.09532 4.77939 6.7903 4.3871L6.70711 4.29289L6.7903 4.3871Z"
                      fill="#898EA3"/>
            </svg>
            <div className={s.FormDescriptionInput}>
                <textarea name="textarea" placeholder='Enter Description'></textarea>
                <div className={s.addCol}>+ To map one more column</div>
            </div>
        </div>
    );
};

export default FormDescription;
