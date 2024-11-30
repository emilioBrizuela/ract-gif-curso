export const getGifs = async (category) => {
    // https://developers.giphy.com/dashboard/
    const limit = 3;
    const key = 'a85kjASC1ulh8agBDD2N5GyuydLYYi6h'
    const url =
        `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&lmit=${limit}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
};