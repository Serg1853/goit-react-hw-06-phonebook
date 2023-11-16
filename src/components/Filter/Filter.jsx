import { InputStyle, LabelStyle } from 'components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterSet, getFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterPhoneBook = useSelector(getFilter);

  const onChangeFilter = event => {
    const { value } = event.carrentTarget;
    dispatch(filterSet(value));
  };

  return (
    <LabelStyle>
      Find contacts by name:
      <InputStyle
        type="text"
        name="filter"
        value={filterPhoneBook}
        title="Enter the name"
        required
        onChange={onChangeFilter}
      />
    </LabelStyle>
  );
};

// import css from './Filter.module.css';
// const Filter = ({ filter, onChangeFilter }) => {
//   return (
//     <div>
//       <label className={css.label}>
//         Find contacts by name
//         <input
//           className={css.input}
//           type="text"
//           value={filter}
//           onChange={onChangeFilter}
//         />
//       </label>
//     </div>
//   );
// };
// export default Filter;
