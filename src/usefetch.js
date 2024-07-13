import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error.message);
                setIsPending(false);
            });
    }, [url]);

    return { data, isPending };
};

export default useFetch;
