import ArtistList from "./ArtistList"

const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=19fce3d2a935da7cbe3409a265da6b94&format=json'

function getMusicData() {
    return fetch( `${URL}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',            
        }
    })
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
        return {
            id: artist.mbid,
            name: artist.name,
            image: artist.image[0] ['#text']
        }
    }))
}

export {getMusicData}