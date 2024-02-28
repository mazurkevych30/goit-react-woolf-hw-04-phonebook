import css from './Filter.module.css';

const Filter = ({ handleFilter }) => {
  return (
    <div className={css.filter_container}>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleFilter} required />
    </div>
  );
};

export default Filter;
