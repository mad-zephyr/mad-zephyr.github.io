const $ = window.data
 
class CreateEl {
  constructor (tagname, classes, parent, text) {
    this.tagname = tagname
    this.classes = classes
    this.parent = parent
    this.text = text
    this.create()
  } 
  create() {
    const _div = document.createElement(this.tagname)
    _div.classList.add(this.classes)

    document.querySelector(this.parent).insertAdjacentElement('beforeend', _div)
    _div.innerHTML = this.text 
    return _div
  }
}

window.addEventListener('DOMContentLoaded', () => {
  let language = 'ru'
  const { ...header } = $.lang.ru.header 
  const { ...about } = $.lang.ru.about 

  const headerSubtitle = new CreateEl('div', 'subtitle', '.header-name', header.greeting)
  const headerName = new CreateEl('div', 'title', '.header-name', header.name)

  const ratingStar = new CreateEl('span', 'rating-num', '.rating', header.coins)
  const ratingStarText = new CreateEl('span', 'rating-text', '.rating', header.coinsText)

  header.skills.forEach(item => { 
    const skill = new CreateEl('div', 'hashtag-items', '.hashtag', item)
  })

  // const aboutBlock = new CreateEl('div', 'section-right-title', '[data-content="about"]', about.title)

  about.block.forEach(block => {

    let text = () => {
      if (block.text !== null ) {
        return `<strong> ${block.title}</strong> </br> ${block.text}`
      } else {
        return `<strong> ${block.title}</strong> </br>  `
      }
    } 

    const title = new CreateEl('p', 'classes', '[data-content="about"]', text())
    const listArr = []
    block.ulli.forEach(list => {  
      listArr.push(`<li>${list}</li>`)
    }) 

    const ulli = new CreateEl('ul', 'classes', '[data-content="about"]', `${listArr}`)

  })
})