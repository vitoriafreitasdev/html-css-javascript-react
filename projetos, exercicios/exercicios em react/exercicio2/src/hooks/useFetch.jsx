import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

    const [loading, setLoading] = useState(false)


    const httpConfig = (data, method) => {
        if(method == "POST"){
            setConfig({
                method,
                Headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data),
            })

            setMethod(method)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const res = await fetch(url)
            const json = await res.json()

            setData(json)
            setLoading(false)
        }

        fetchData()
    }, [url, callFetch])

    useEffect(() => {
        const httpResquest = async() => {
            let json;

            if(method === "POST") {
                
                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)

                json = await res.json()
                 
            }

            setCallFetch(json)
        }
        httpResquest()
    }, [config, method, url])

    return {data, httpConfig, loading}
}