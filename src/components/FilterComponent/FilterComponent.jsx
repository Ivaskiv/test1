import css from './FilterStyle.module.css';
import sprite from '../../assets/sprite.svg';
import chroma from 'chroma-js';

import { useDispatch, useSelector } from 'react-redux';
import { useController, useForm } from 'react-hook-form';
import FilterInput from './FilterInput.jsx';
import { selectFilters } from '../../redux/advert/advertSelector.js';
import { advertsSlice } from '../../redux/advert/advertsSlice.js';
import Select from 'react-select';

const location_options = [
  { value: { country: 'Ukraine', city: 'Kyiv' }, label: 'Kyiv, Ukraine' },
  { value: { country: 'Ukraine', city: 'Lviv' }, label: 'Lviv, Ukraine' },
  { value: { country: 'Ukraine', city: 'Odesa' }, label: 'Odesa, Ukraine' },
  { value: { country: 'Ukraine', city: 'Poltava' }, label: 'Poltava, Ukraine' },
  { value: { country: 'Ukraine', city: 'Dnipro' }, label: 'Dnipro, Ukraine' },
  { value: { country: 'Ukraine', city: 'Kharkiv' }, label: 'Kharkiv, Ukraine' },
  { value: { country: 'Ukraine', city: 'Sumy' }, label: 'Sumy, Ukraine' },
];

//стилі для компонента Select з бібліотеки react-select:
// control: основний контейнер Select без бордера і тіні, з оранжевим бордером при наведенні
// option: фоновий колір опцій змінюється залежно від стану (вибраний, сфокусований, вимкнений).
//multiValue: стилі для вибраних значень з фоном і текстом оранжевого кольору
const colourStyles = {
  control: base => ({
    ...base,
    backgroundColor: '',
    border: 'none',
    boxShadow: 'none',
    borderColor: '',
    '&:hover': {
      borderColor: 'orange',
    },
  }),
  option: (base, { isDisabled, isFocused, isSelected }) => ({
    ...base,
    color: isDisabled ? '#ccc' : '#101828',
    backgroundColor: isDisabled
      ? undefined
      : isSelected
      ? 'orange'
      : isFocused
      ? chroma('orange').alpha(0.1).css()
      : undefined,
  }),
};

export default function FilterComponent() {
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();
  const { register, handleSubmit, control } = useForm({
    defaultValues: filter,
  });
  const { field } = useController({ name: 'location', control });

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(data => {
        dispatch(advertsSlice.actions.setFilters(data));
      })}
    >
      {/* Location */}
      <label className={css.title_label}>
        Location
        <div className={css.filter_location}>
          <svg className={css.btn_icon_location}>
            <use href={`${sprite}#icon-location`} />
          </svg>
          <Select
            {...field}
            className={css.select_style}
            options={location_options}
            placeholder="Select Location"
            styles={colourStyles}
          />
        </div>
      </label>
      {/* Vehicle equipment */}
      <label className={css.title_label}>Filters</label>
      <h2 className={css.title}>Vehicle equipment</h2>
      <hr />
      <div className={css.buttons_container}>
        <FilterInput
          {...register('details')}
          label="AC"
          iconName="icon-AC"
          type="checkbox"
          value="airConditioner"
        />
        <FilterInput
          {...register('transmission')}
          label="Automatic"
          iconName="icon-automatic"
          type="checkbox"
          value="automatic"
        />
        <FilterInput
          {...register('details')}
          label="Kitchen"
          iconName="icon-kitchen"
          type="checkbox"
          value="kitchen"
        />
        <FilterInput
          {...register('details')}
          label="TV"
          iconName="icon-tv"
          type="checkbox"
          value="TV"
        />
        <FilterInput
          {...register('details')}
          label="Shower/WC"
          iconName="icon-shower"
          type="checkbox"
          value="showerOrWC"
        />
      </div>
      {/* Vehicle type */}
      <h2 className={css.title}>Vehicle type</h2>
      <hr />
      <div className={css.buttons_container}>
        <FilterInput
          {...register('form')}
          label="Van"
          iconName="icon-camper"
          type="radio"
          value="panelTruck"
        />
        <FilterInput
          {...register('form')}
          label="Fully Intergrated"
          iconName="icon-camper-1"
          type="radio"
          value="fullyIntegrated"
        />
        <FilterInput
          {...register('form')}
          label="Alcove"
          iconName="icon-camper-2"
          type="radio"
          value="alcove"
        />
      </div>
      <button className={css.btn_search} type="submit">
        SEARCH
      </button>
    </form>
  );
}

//https://gka.github.io/chroma.js/
