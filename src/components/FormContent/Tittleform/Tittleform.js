import React from 'react';
import s from './Tittleform.module.scss';

const Tittleform = () => {
    return (
        <div className={s.tittleForm}>
            <h2>Map columns. For each field, select bank account fields</h2>
            <div className={s.tittleFormCheck}>
                <label>
                    <input type="checkbox" checked="checked"/>
                    First row in file is a header row
                </label>
            </div>
        </div>
    );
};

export default Tittleform;
