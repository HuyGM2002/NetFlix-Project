import Intro from '../Components/Intro/Intro';
import Contents from '../Components/Contents/Contents';
import Menu from '../Components/Menu/Menu';
import MoviesDetails from '../Components/Details/MoviesDetails';

const Home = () => {
    return (
        <>
            <Intro />
            <Contents />
            <Menu />
            <MoviesDetails />
        </>
    )
}
export default Home;