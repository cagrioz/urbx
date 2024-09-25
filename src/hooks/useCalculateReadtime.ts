import { useMemo } from 'react';

export default function useCalculateReadtime(description: string) {
    const wordsPerMinute = 200;
    const words = description.split(' ').length;
    const minutes = words / wordsPerMinute;
    const readtime = Math.ceil(minutes);

    return useMemo(() => {
        return readtime;
    }, [description]);
}
