import css from './IconButton.module.css';
import sprite from '../../../assets/sprite.svg';

const iconMap = {
  adults: 'icon-users',
  automatic: 'icon-automatic',
  airConditioner: 'icon-airconditioner',
  engine: 'icon-petrol',
  kitchen: 'icon-kitchen',
  beds: 'icon-beds',
  AC: 'icon-AC',
  TV: 'icon-tv',
  bathroom: 'icon-shower',
  CD: 'icon-cd',
  width: 'icon-width',
  height: 'icon-height',
  length: 'icon-length',
  consumption: 'icon-consumption',
  tank: 'icon-tank',
};

const IconButton = ({ id, count = null }) => {
  if (count === 0) {
    return null;
  }

  return (
    <button className={css.icon_btn} key={id}>
      <svg className={css.icon}>
        <use href={`${sprite}#${iconMap[id]}`}></use>
      </svg>
      {count}
      {count && ' '}
      {id}
    </button>
  );
};
export default IconButton;
