var themeSwicther = document.querySelector('.theme-switcher')
themeSwicther.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('is-dark')
})

var tabBtnContainer = document.querySelector('.tabs-button').parentElement

tabBtnContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('active') == false)
        e.target.classList.add('active')
    siblings(e.target).forEach(el => { el.classList.remove('active') }); 
})


function siblings(element) {
    const siblings = []
    var els = Array.from(element.parentElement.children)
    els.forEach(el => {
        if (el != element)  siblings.push(el)
    });
    return siblings
}


var tabsContentContainer = document.querySelectorAll('.tabs-content')

tabsContentContainer.addEventListener('mouseover', () => {
    
})