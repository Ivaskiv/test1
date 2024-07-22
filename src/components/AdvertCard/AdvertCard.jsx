import css from '../AdvertCard/AdvertCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import { addFavoriteId, removeFavoriteId } from '../../redux/advert/advertsSlice';
import { useState } from 'react';
import IconButton from '../Icons/IconButton/IconButton.jsx';
import Modal from '../Modal/CamperModal/CamperModal.jsx';
import { createPortal } from 'react-dom';

const AdvertCard = ({ _id }) => {
  const advert = useSelector(state => state.adverts.list.find(item => item._id === _id));
  const isFavorite = useSelector(state => state.adverts.favoriteIds.includes(_id));

  if (!advert) {
    return <div>Advert not found</div>;
  }

  const {
    name,
    description,
    rating,
    reviews,
    gallery,
    price,
    location,
    details,
    adults,
    transmission,
  } = advert;

  const [expanded, setExpanded] = useState(false);
  const [currentAdvert, setCurrentAdvert] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleToggleDescription = () => {
    setExpanded(!expanded);
  };
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavoriteId(_id));
    } else {
      dispatch(addFavoriteId(_id));
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentAdvert(null);
  };

  return (
    <div key={_id} className={css.advert_card_gallery}>
      <div className={css.advert_card_container}>
        {gallery && <img src={gallery[0]} alt={name} className={css.advert_image} />}
      </div>
      <div className={css.advert_card}>
        <div className={css.advert_details}>
          {/* title */}
          <div className={css.advert_title}>
            <div className={css.name_price}>
              <h3 className={css.runcated_title}>{name}</h3>
              {/* favorite */}
              <button className={css.price} onClick={handleToggleFavorite}>
                € {price.toFixed(2)}
                <svg>
                  <use href={`${sprite}#${isFavorite ? 'icon-unLike' : 'icon-like'}`}></use>
                </svg>
              </button>
            </div>
            {/* star location */}
            <div className={css.advert_favorite_location}>
              <div className={css.advert_favorite}>
                <svg className={css.icon_star}>
                  <use href={`${sprite}#icon-star`}></use>
                </svg>
                {rating}({reviews.length} Rewiews)
              </div>
              <div className={css.advert_location}>
                <svg className={css.icon_location}>
                  <use href={`${sprite}#icon-location`}></use>
                </svg>
                {location}
              </div>
            </div>
          </div>
          {/* description */}
          <div className={css.advert_description} onClick={handleToggleDescription}>
            <p className={expanded ? css.expanded : css.collapsed}> {description}</p>
          </div>
          {/* adverts_btn */}
          <div className={css.adverts_btn}>
            <IconButton id="adults" count={adults} />
            {transmission === 'automatic' && <IconButton id="automatic" />}
            {Object.entries(details)
              .slice(0, 6)
              .map(([key, value]) => (
                <IconButton key={key} id={key} count={value} />
              ))}
          </div>

          <button
            className={css.btn_show_more}
            onClick={() => {
              setCurrentAdvert(advert);
              setShowModal(true);
            }}
          >
            Show more
          </button>
          {showModal &&
            createPortal(
              <Modal show={showModal} onClose={handleCloseModal} advert={currentAdvert} />,
              document.body
            )}
        </div>
      </div>
    </div>
  );
};
export default AdvertCard;

//array.some(callback(element[, index[, array]])[, thisArg])
//const numbers = [1, 5, 8, 12, 4];
// const hasLargeNumber = numbers.some(number => number > 10);
// console.log(hasLargeNumber); // Виведе: true, бо 12 більше 10
