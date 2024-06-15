import MoviesRow from './MoviesRow';
import styles from './Contents.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import * as FUNC from '../../ReduxStore/action/index';
import { ImArrowUp } from 'react-icons/im';
import { animateScroll as scroll } from 'react-scroll';
import { useScrollY } from '../hooks';

const Contents = () => {
    const dispatch = useDispatch();
    const { NetflixOriginals, TrendingMovies, TopRatedMovies, ActionMovies,
        ComedyMovies, HorrorMovies, RomanceMovies, DocumentaryMovies } = useSelector(state => state.movies);
    const ScrollToTop = () => {
        scroll.scrollToTop();
    }
    useEffect(() => {
        dispatch(FUNC.getNetflixOriginal());
        dispatch(FUNC.getTrendingMovies());
        dispatch(FUNC.getTopRatedMovies());
        dispatch(FUNC.getActionMovies());
        dispatch(FUNC.getComedyMovies());
        dispatch(FUNC.getHorrorMovies());
        dispatch(FUNC.getRomanceMovies());
        dispatch(FUNC.getDocumentaryMovies());
    }, [dispatch])
    return (
        <div className={styles.wrapContent}>
            <MoviesRow linkMovies={NetflixOriginals} typeMovies="NetFlix Origin" idSection="NetFlix" isNetflix={true} />
            <MoviesRow linkMovies={TrendingMovies} typeMovies="Trending Movies" idSection="Trending" />
            <MoviesRow linkMovies={TopRatedMovies} typeMovies="Top Rated Movies" idSection="TopRated" />
            <MoviesRow linkMovies={ActionMovies} typeMovies="Action Movies" idSection="Action" />
            <MoviesRow linkMovies={ComedyMovies} typeMovies="Comedy Movies" idSection="Comedy" />
            <MoviesRow linkMovies={HorrorMovies} typeMovies="Horror Movies" idSection="Horror" />
            <MoviesRow linkMovies={RomanceMovies} typeMovies="Romance Movies" idSection="Romance" />
            <MoviesRow linkMovies={DocumentaryMovies} typeMovies="Documentaries Movies" idSection="Documentaries" />
            <div className={styles.goToTop} onClick={ScrollToTop}
                style={{
                    visibility: `${useScrollY() > 800 ? 'visible' : 'hidden'}`
                }}
            >
                <ImArrowUp />
            </div>
        </div>
    )
}

export default Contents;