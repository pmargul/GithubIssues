export const getApi = async (uri: string) => {
    let response = await fetch(uri, {
      method: "GET",  
    })
    const json = await response.json();
    return json;
};
