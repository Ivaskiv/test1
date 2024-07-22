import sprite from '../../../assets/sprite.svg';
import css from './IconStarRating.module.css';

const IconStarRating = ({ rating, width, height, fillColor }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    // Визначаємо колір для кожної зірки
    let starFill = i < rating ? fillColor : '#F2F4F7';

    stars.push(
      <svg key={i} width={width} height={height}>
        {/* Прибрано linearGradient, якщо він не впливає на колір */}
        <use href={`${sprite}#icon-star`} fill={starFill} stroke="none"></use>
      </svg>
    );
  }

  return <div className={css.star_rating}>{stars}</div>;
};

export default IconStarRating;
