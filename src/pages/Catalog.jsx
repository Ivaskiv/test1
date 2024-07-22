import css from '../pages/pages.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AdvertCard from '../components/AdvertCard/AdvertCard.jsx';
import FilterComponent from '../components/FilterComponent/FilterComponent.jsx';
import { selectFilteredAdverts } from '../redux/advert/advertSelector.js';

const Catalog = () => {
  const filteredAdverts = useSelector(selectFilteredAdverts);
  const [visibleAdverts, setVisibleAdverts] = useState(4);

  const loadMoreAdverts = () => {
    setVisibleAdverts(prevVisibleAdverts => prevVisibleAdverts + 4);
  };
  return (
    <div className={css.catalog_page}>
      <div className={css.left_block}>
        <FilterComponent />
      </div>
      <div className={css.right_block}>
        <div className={css.adverts_list}>
          {filteredAdverts.slice(0, visibleAdverts).map(advert => (
            <AdvertCard key={advert._id} _id={advert._id} />
          ))}
        </div>
        {visibleAdverts < filteredAdverts.length && (
          <button onClick={loadMoreAdverts} className={css.btn_load_more}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default Catalog;

//хуки useEffect і useState для управління станом компоненту
//функції useDispatch і useSelector для взаємодії з Redux
