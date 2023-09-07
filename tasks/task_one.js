
// Write something
let getAnim = document.getElementById('anim')
let api = 'https://api.jikan.moe/v4/anime'

async function animes() {
    try{
    let response = await fetch(api)
    let result = await response.json()

    result.forEach(elements => {
        let content = document.createElement('div')
        let titles = document.createElement('p')
        let duration = document.createElement('p')
        let rating = document.createElement('p')
        let image =  document.createElement('image')
        let rank = document.createElement('p')
        let trailer = document.createElement('p')

        content.append(titles,duration,rating,image,rank,trailer)

        titles.textContent = 'elements:${elements.titles}'
        duration.textContent = 'elements:${elements.duration}'
        rating.textContent = 'elements:${elements.rating}'
        image.src = 'elements:${elements.image'
        rank.src = 'elements:${elements.rank}'
        trailer.src = 'elements:${elements.trailer}'

        content.className = 'content'
        titles.className = 'titles'
        duration.className = 'duration'
        rating.className = 'rating'
        image.className = 'image'

    });
}catch(error) {

}
}
animes()
