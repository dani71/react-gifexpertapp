


export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=zkUS2vUBGws9ne3pbFWMT0xpKk3Xj6sV`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
    //setImages(gifs) //  gifs es una lista de objetos con id, title y url.
}

// getGifs();