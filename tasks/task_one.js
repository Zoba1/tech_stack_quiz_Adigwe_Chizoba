
// Write something
const api = 'https://api.jikan.moe/v4/anime'
const lists = []
async function fetchApi (){
    const response = await fetch(api)
    const data = await response.json()
    const lists = data
    console.log(lists.data);
    lists.data.forEach((elements)=>{
        const image = document.createElement('img')
        const title = document.createElement('h2')
        const ratings = document.createElement('p')
        const rank = document.createElement('p')
        const synopis = document.createElement('p')
        const year = document.createElement('p')
        const bigDiv = document.getElementById('container')
        const mainCon = document.getElementById('mainCon')
        mainCon.append(bigDiv)
        bigDiv.append(title, image,  ratings, rank, synopis,year)
        image.src = `${elements.images.jpg.large_image_url}`
        title.textContent = `${elements.title}`
        ratings.textContent = `Ratings:${elements.rating}`
        rank.textContent = `Rank:${elements.rank}`
        synopis.textContent = `Ratings:${elements.synopsis}`
        year.textContent = `Year:${elements.year}`
    })
}
fetchApi()
