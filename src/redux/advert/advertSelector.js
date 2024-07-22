import { createSelector } from 'reselect';

// отримати список оголошень з Redux
export const selectAdvertsList = state => state.adverts.list;

// отримати поточні фільтри з Redux
export const selectFilters = state => state.adverts.filter;

// селектор для вибору улюблених
export const selectFavorite = state => state.adverts.favorites;

export const detailKeyMap = {
  CD: 'CD',
  TV: 'TV',
  airConditioner: 'airConditioner',
  bathroom: 'bathroom',
  beds: 'beds',
  freezer: 'freezer',
  gas: 'gas',
  hob: 'hob',
  kitchen: 'kitchen',
  microwave: 'microwave',
  radio: 'radio',
  shower: 'shower',
  toilet: 'toilet',
  water: 'water',
};

// селектор, який обчислить відфільтровані оголошення на основі поточних фільтрів
export const selectFilteredAdverts = createSelector(
  [selectAdvertsList, selectFilters],
  (adverts, filter) => {
    return adverts.filter(advert => {
      // advert.location.includes(filter.location) перевіряє, чи значення filter.location входить в значення advert.location
      //includes перевіряє, чи містить рядок певний підрядок, повертає true, якщо підрядок знайдений, і false в іншому випадку
      if (
        filter.location &&
        advert.location != `${filter.location.value.country}, ${filter.location.value.city}`
      ) {
        return false;
      }
      // Фільтрація за деталями (якщо вказані деталі для фільтрації)
      if (filter.transmission.length !== 0 && filter.transmission[0] !== advert.transmission) {
        return false;
      }
      if (
        filter.details.length !== 0 &&
        !filter.details.every(item =>
          item === 'showerOrWC'
            ? advert.details.shower || advert.details.toilet
            : !!advert.details[item]
        )
      ) {
        return false;
      }
      // Фільтрація за формою оголошення (якщо вказана форма)
      if (filter.form && filter.form !== advert.form) {
        return false;
      }
      return true;
    });
  }
);
// селектор для вибору статусу завантаження
export const selectLoading = createSelector(
  [selectAdvertsList],
  advertsState => advertsState.isLoading
);

// селектор для вибору помилки
export const selectError = createSelector([selectAdvertsList], advertsState => advertsState.error);
