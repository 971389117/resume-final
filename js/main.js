let sections=document.querySelectorAll('section')
let isTopNavBarActive=false
let clientHeight=document.documentElement.clientHeight

for(let i=1;i<sections.length;i++){
    sections[i].isActive=false
}

    window.addEventListener('scroll',e=>{
            if(!isTopNavBarActive && scrollY>0){
                isTopNavBarActive=!isTopNavBarActive
                document.querySelector('.top-nav-bar').classList.add('active')
            }else if(scrollY===0){
                isTopNavBarActive = false
                document.querySelector('.top-nav-bar').classList.remove('active')
            }
            for(let i=1;i<sections.length;i++){
                if(sections[i].offsetTop+150<=scrollY+clientHeight && !sections[i].isActive){
                    sections[i].isActive=true
                    sections[i].classList.add('animated')
                }
            }
    })
