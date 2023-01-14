import {
    useEffect,
    useState
} from "react";

export function useFetch(url, setData = null) {
    const [state, setState] = useState({
        items: [],
        loading: true
    });
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
                const responseData = await response.json();
                if (response.ok) {
                    setData(responseData);
                    setState(state => ({
                        ...state,
                        items: responseData,
                        loading: false
                    }))
                } else {
                    setState(state => ({
                        ...state,
                        loading: false
                    }))
                }
            } catch (error) {
                console.error(error);
                setState(state => ({
                    ...state,
                    loading: false
                }))
            }
        })();
    }, [state.loading]);
    if (!setData) {

        return [state.items, state.loading];
    }
    return [
        [], state.loading
    ]
}