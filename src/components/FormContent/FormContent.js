import React from 'react';
import s from './FormContent.module.scss';
import Tittleform from "./Tittleform/Tittleform";
import FormFile from "./FormFile/FormFile";
import FormDate from "./FormDate/FormDate";
import FormDescription from "./FormDescription/FormDescription";
import FormAmount from "./FormAmount/FormAmount";

const FormContent = () => {
    return (
        <div className={s.appContentFormAll}>
            <Tittleform/>
            <div className={s.appContentForm}>
                <FormFile/>
                <FormDate/>
                <FormDescription/>
                <FormAmount/>
            </div>
        </div>
    );
};

export default FormContent;
