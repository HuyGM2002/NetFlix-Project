import styles from './MoviesRow.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { SmoothHorizontalScrolling } from '../../util';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/* 
    Có 2 cách tạo slider : 
        1.Thuần (Đang Làm)
        2.Sử dụng Swiper
*/

const MoviesRow = (props) => {
    const enableContent = useSelector(state => state.enable);
    const infoBanner = useSelector(state => state.data);
    const dispatch = useDispatch();
    const { linkMovies, typeMovies, idSection, isNetflix } = props;
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
    const sliderRef = useRef();
    const movieRef = useRef();
    const handleScroll = (param) => {
        if (param === 'right') {
            if (sliderRef.current.scrollRight !== 0) {
                SmoothHorizontalScrolling(
                    sliderRef.current
                    , 250
                    , movieRef.current.clientWidth * 2
                    , sliderRef.current.scrollLeft
                )
            }
        }
        else {
            if (sliderRef.current.scrollLeft !== 0) {
                SmoothHorizontalScrolling(
                    sliderRef.current
                    , 250
                    , -movieRef.current.clientWidth * 2
                    , sliderRef.current.scrollLeft
                )
            }
        }
    }
    /* Drag */
    const onDragStart = e => {
        setIsDrag(true);
        setDragDown(e.screenX);
    }
    const onDragEnd = e => {
        setIsDrag(false);
    }
    const onDragEnter = e => {
        setDragMove(e.screenX);
    }
    useEffect(() => {
        if (isDrag) {
            if (dragDown < dragMove) {
                handleScroll('left');
            }
            else if (dragDown > dragMove) {
                handleScroll('right');
            }
        }
    }, [dragDown, dragMove, isDrag])

    return (
        <div className={styles.content} draggable="false" id={idSection}>
            <h1 className={styles.title}>{typeMovies}</h1>
            <div
                ref={sliderRef}
                className={styles.slider}
                style={
                    linkMovies && linkMovies.length > 0
                        ? { gridTemplateColumns: `repeat(${linkMovies.length},250px)` } : {}
                }
                draggable="true"
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
            >

                {
                    // linkMovies && linkMovies.length > 0 && linkMovies.map((movie, index) => (
                    //     <div ref={movieRef} className={styles.sliderItem} key={index} draggable="false" onClick={() => dispatch({ "type": "show" })}>
                    //         <img src={movie} alt="" className={styles.image} draggable="false" />
                    //         <p className={styles.name}>Movie Name</p>
                    //     </div>
                    // ))
                    linkMovies && linkMovies.length > 0 && linkMovies.map((movie, index) => {
                        if (movie.poster_path && movie.backdrop_path !== null) {
                            var imageUrl = isNetflix
                                ? `http://image.tmdb.org/t/p/original${movie.poster_path}` : `http://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
                        }
                        return (
                            <div ref={movieRef} className={styles.sliderItem} key={index} draggable="false"
                                onClick={() => {
                                    dispatch({ "type": "show" });
                                    dispatch({ type: "up", payload: movie })
                                    // localStorage.setItem("name", movie.name || movie.title);
                                    // localStorage.setItem("rating", movie.vote_average * 10);
                                    // localStorage.setItem("popularity", movie.popularity);
                                    // localStorage.setItem("releaseDate", movie.first_air_date
                                    //     || movie.release_date);
                                    // localStorage.setItem("info", movie.overview);
                                    // localStorage.setItem("background", movie.backdrop_path);
                                }}
                            >
                                <img src={imageUrl} alt="" className={styles.image} draggable="false" />
                                <p className={styles.name}>
                                    {movie.title || movie.name}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.btnLeft} onClick={() => {
                handleScroll('left');
            }}>
                <AiOutlineLeft />
            </div>
            <div className={styles.btnRight} onClick={() => {
                handleScroll('right');
            }}>
                <AiOutlineRight />
            </div>
        </div>
    )
}

export default MoviesRow;