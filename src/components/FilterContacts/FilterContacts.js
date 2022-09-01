import css from './FilterContacts.module.css';
import { useDispatch,  } from 'react-redux';
import { filter } from 'Redux/phoneBookActions';

export const FilterContacts = () => {

    const dispath = useDispatch();

    return (<>
        <div className={css.filterContainer}>
        <label htmlFor='filter' className={css.filterTitle}> Пошук контактів за іменами </label>
        <input
                id='filter'
                className={css.filterInput}
                type="text"
                name="filter"
                onChange={(e) => {
                    dispath(filter(e.currentTarget.value))
                }}
            ></input>
        </div>
    </>
    )
};

