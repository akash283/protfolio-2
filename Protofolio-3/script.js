let themeBtn=document.querySelector('#theme-btn');
let menubar=document.querySelector('#menu-btn')
let header=document.querySelector('.header');


window.onscroll=()=>{
    menubar.classList.remove('fa-times')
    header.classList.remove('fa-times')
}

menubar.onclick=()=>{
    menubar.classList.toggle('fa-times'); //change icons after clicking on menu bars
    header.classList.toggle('active'); // after clicking menu bars appear from right side
}

let cusror1=document.querySelector('.cusror1')
let cusror2=document.querySelector('.cusror2')

window.onmousemove=(e)=>{
    cusror1.style.top=e.pageY+'px'
    cusror1.style.left=e.pageX + 'px';
    cusror2.style.top=e.pageY + 'px';
    cusror2.style.left=e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links=>{
    links.onmouseenter=()=>{
        cusror1.classList.add('active')
        cusror2.classList.add('active')
    }

    links.onmouseleave = () =>{
        cusror1.classList.remove('active')
        cusror2.classList.remove('active')
    }
})

document.addEventListener('DOMContentLoaded',function(){
    document.addEventListener('touchstart',handleTouchStart)
    document.addEventListener('touchend',handleTouchEnd)


    function handleTouchStart(event) {
        const touch = event.touches[0];
        updateCursorPos(touch.clientX, touch.clientY);
        showCursor();
    }

    function handleTouchEnd() {
        hideCursor();
    }

    function updateCursorPos(x, y) {
        cusror1.style.left = x + "px";
        cusror2.style.left = x + "px";
        cusror1.style.top = y + "px";
        cusror2.style.top = y + "px";
    }

    function showCursor() {
        cusror1.style.display = "block";
        cusror2.style.display = "block";
    }

    function hideCursor() {
        cusror1.style.display = "none";
        cusror2.style.display = "none";
    }
})

