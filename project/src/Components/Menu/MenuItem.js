import styles from './Menu.module.scss';
import { randomRgbaColor } from '../../util/index.js';
import { Link } from 'react-scroll'
const MenuItem = ({ name, Icon, target }) => {
    return (
        <Link
            className={styles.menuItem}
            to={target}
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
            activeClass="active"
        >
            <div className={styles.menuIcon} style={{ color: randomRgbaColor(1) }}>
                {Icon}
            </div>
            <div className={styles.menuName}>{name}</div>
        </Link>
    )
}
export default MenuItem;