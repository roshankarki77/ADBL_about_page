import { useEffect, useRef, useState } from 'react';

const useHandleClickOutside = <T extends HTMLElement>() => {
    const [isComponentVisible, setIsComponentVisible] = useState(false);
    const ref = useRef<T | null>(null);

    const handleOutsideClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return { ref, isComponentVisible, setIsComponentVisible };
};

export default useHandleClickOutside;
