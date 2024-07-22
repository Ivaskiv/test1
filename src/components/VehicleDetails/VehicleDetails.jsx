import css from './VehicleDetails.module.css';

const VehicleDetails = ({ id, form, length, width, height, tank, consumption }) => {
  return (
    <div className={css.vehicle_details} key={id}>
      <div className={css.detail_item}>
        <span className={css.label}>Form:</span>
        <span className={css.value}>{form}</span>
      </div>
      <div className={css.detail_item}>
        <span className={css.label}>Length:</span>
        <span className={css.value}>{length} m</span>
      </div>
      <div className={css.detail_item}>
        <span className={css.label}>Width:</span>
        <span className={css.value}>{width} m</span>
      </div>
      <div className={css.detail_item}>
        <span className={css.label}>Height:</span>
        <span className={css.value}>{height} m</span>
      </div>
      <div className={css.detail_item}>
        <span className={css.label}>Tank:</span>
        <span className={css.value}>{tank} L</span>
      </div>
      <div className={css.detail_item}>
        <span className={css.label}>Consumption:</span>
        <span className={css.value}>{consumption} L/100km</span>
      </div>
    </div>
  );
};

export default VehicleDetails;
