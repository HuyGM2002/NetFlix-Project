import NetFlixlogo from '../../assets/images/Logonetflix.png';
import { BsSearch } from 'react-icons/bs';
import styles from './Navbar.module.scss';
import { useRef, useState } from 'react';
import { useScrollY } from '../hooks';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchMovies } from '../../ReduxStore/action';
const Navbar = () => {
    /* Xử lý logic của thanh search */
    const inputRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [keyword, setKeyWord] = useState('');
    const handleClick = () => {
        Object.assign(inputRef.current.style, {
            width: '250px',
            border: '1px solid #222'
        })
        // navigate("/search");
    }
    const handleBlur = () => {
        Object.assign(inputRef.current.style, {
            width: '0px',
            border: 'none'
        })
    }
    /* Xử lý search */
    const handleChange = (e) => {
        let keyword = e.target.value;
        setKeyWord(keyword);
        if (keyword.length > 0) {
            navigate(`/search`)
            dispatch(getSearchMovies(keyword));
        }
        else if (keyword.length === 0) {
            navigate(`/`);
        }
    }
    return (
        <div className={styles.navbar} style={useScrollY() < 50 ?
            { backgroundColor: 'transparent' } : { backgroundColor: 'rgb(17,17,17)', boxShadow: '0 0 8px 0 #333' }
        }>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <a href="http://localhost:3000/">
                        <img src={NetFlixlogo} alt="NetFlix Logo" className={styles.image} width="" />
                    </a>
                </div>
                <div className={styles.search} onBlur={handleBlur}>
                    <BsSearch className={styles.searchIcon} onClick={handleClick} />
                    <input
                        ref={inputRef}
                        type="text"
                        className={styles.searchInput}
                        placeholder="Input title , genres , people"
                        onChange={handleChange}
                    // value={keyword}
                    />
                </div>
            </div>
            <div className={styles.fadeBottom}></div>
        </div>
    )
}

export default Navbar;