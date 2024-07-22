import css from '../pages/pages.module.css';
import { useSelector } from 'react-redux';
import AdvertCard from '../components/AdvertCard/AdvertCard.jsx';

const Favorites = () => {
  const favorites = useSelector(state => {
    const { favoriteIds, list } = state.adverts;
    return list.filter(advert => favoriteIds.includes(advert._id));
  });

  return (
    <div className={css.favorites_page}>
      {favorites.length > 0 ? (
        <div className={css.adverts_list}>
          {favorites.map(advert => (
            <AdvertCard key={advert._id} _id={advert._id} />
          ))}
        </div>
      ) : (
        <p>No favorite adverts</p>
      )}
    </div>
  );
};

export default Favorites;
