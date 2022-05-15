import { useState, useEffect } from "react";
import { getContent, getItems } from "../Client";

type Entity = "about" | "essay" | "journal" | "link" | "shortText" | "bagend";

interface ReturnedEntity<TResponse> {
    data: TResponse;
}

function useFetch<T>(entityType: Entity, initialState: T): ReturnedEntity<T[]> {
    const [data, setData] = useState<T[]>([initialState]);

    useEffect(() => {
        getContent(entityType).then((data) => {
            setData(getItems(data));
        });
    }, [entityType]);

    return { data };
}

export default useFetch;
