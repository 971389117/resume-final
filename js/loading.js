(function name(arguments) {
    let wrapper = document.querySelector('#wrapper')
    wrapper.style.visibility = 'hidden'
    wrapper.style.display = 'none'
    window.addEventListener('load', e => {
        setTimeout(a => {
            wrapper.style.visibility = 'visible'
            wrapper.style.display = 'block'
            document.querySelector('.loading').classList.remove('active')
            setTimeout(()=>{
                document.querySelector('.top-nav-bar').classList.add('c-loading')
                document.querySelector('.container').classList.add('c-loading')
                document.querySelector('section').classList.add('animated')
            },300)
        }, 1)

    })
}())
