import { useState , useEffect } from 'react';
export function useScrollY(){
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () => {
        const scrollY = window.scrollY;
        setScrollY(scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollY]);
    return scrollY;
}