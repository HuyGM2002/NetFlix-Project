import ReactPlayer from "react-player";
import { VscMute , VscUnmute } from "react-icons/vsc";
import styles from "../Intro/Intro.module.scss";
import React , { useState } from "react";
const Intro = () => {
    const [ isMuted , setIsMuted ] = useState(true);
    const handleClick = () => {
        setIsMuted(prev => !prev);
    }
    return (
        <div className={styles.intro}>
            <ReactPlayer 
                playing={true}
                width="100%"
                height="100%"  
                volume={1}
                muted={isMuted}
                url="https://vimeo.com/328542867"
                className={styles.videoIntro}
            />
            <div className={styles.content}>
                <h1 className={styles.title}>Netflix | The Society</h1>
                <p className={styles.text}>Movies move us like nothing else can, whether they’re scary, funny, dramatic, 
                romantic or anywhere in-between. So many titles, so much to experience.</p>
            </div>
            {
                isMuted ? 
                (<VscMute className={styles.btnMute} onClick={handleClick} /> )
                : 
                (<VscUnmute className={styles.btnMute} onClick={handleClick} />)
            }
            <div className={styles.fadeBottom}></div>
        </div>
    )
}
export default Intro;