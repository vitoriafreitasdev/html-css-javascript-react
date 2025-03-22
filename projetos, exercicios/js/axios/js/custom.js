const postsFetch = axios.create({
    baseURL: "https://jsonplaceholder.typecode.com",
    headers: {
        Accept: "application/json",
        Authorization: "meunovotoken"
    }
});