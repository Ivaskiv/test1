import sprite from '../../assets/sprite.svg';
import css from './FilterStyle.module.css';
import { forwardRef } from 'react';

export default forwardRef(function FilterInput({ iconName, label, type, ...rest }, ref) {
  return (
    <label ref={ref} className={type === 'checkbox' ? css.checkbox_button : css.radio_button}>
      <input type={type} {...rest} />
      <span className={css.check_style}>
        <svg className={css.btn_icon}>
          <use href={`${sprite}#${iconName}`} />
        </svg>
        {label}
      </span>
    </label>
  );
});
