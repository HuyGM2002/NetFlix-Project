import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { AiFillStar, AiTwotoneHeart } from 'react-icons/ai';
import { BsFire } from 'react-icons/bs';
import { MdMovie, MdTheaterComedy } from 'react-icons/md';
import { GiGhost, GiBandageRoll } from 'react-icons/gi';
import { RiNetflixFill } from 'react-icons/ri';
const Menu = () => {
    return (
        <div className={styles.menu}>
            <ul className={styles.menuList}>
                <MenuItem name="NetFlix" Icon={<RiNetflixFill />} target="NetFlix" />
                <MenuItem name="Trending" Icon={<BsFire />} target="Trending" />
                <MenuItem name="Top rated" Icon={<AiFillStar />} target="TopRated" />
                <MenuItem name="Actions Movies" Icon={<MdMovie />} target="Action" />
                <MenuItem name="Comedy Movies" Icon={<MdTheaterComedy />} target="Comedy" />
                <MenuItem name="Horror Movies" Icon={<GiGhost />} target="Horror" />
                <MenuItem name="Romance Movies" Icon={<AiTwotoneHeart />} target="Romance" />
                <MenuItem name="Documentaries" Icon={<GiBandageRoll />} target="Documentaries" />
            </ul>
        </div>
    )
}
export default Menu;