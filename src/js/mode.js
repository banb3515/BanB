// 화면이 회전되었는지 확인
let orientationChanged = false

// 모드 변경
let changeMode = function (type) {
    let container = document.getElementById('container')
    let emptys = document.getElementsByClassName('empty')
    let display = ''

    // 모바일 버전
    if (type == 'portrait') {
        display = 'none'
        container.style.width = '100%'
    } else if (type == 'landscape')
        container.style.width = '50%'

    Array.prototype.forEach.call(emptys, e => {
        e.style.display = display
    })
}

window.onload = function () {
    let container = document.getElementById('container')
    let content = document.getElementById('content')
    let navBtn = document.getElementById('nav-btn')
    let navBtnCount = 0

    // 펼치기 버튼 클릭 시 CSS 깨짐 방지
    navBtn.onclick = function () {
    navBtnCount ++

    let status = navBtn.classList[1]

    if (navBtnCount == 1 || status == 'collapsed')
        content.style.height = '71%'
    else if (status == 'not-collapsed')
        content.style.height = '90%'
    }

    // 'PC 버전으로 보기' 상태인지 확인
    if (container.classList.contains('pc-container')) {
        // 가로, 세로 탐지
        screen.orientation.onchange = function () {
            let type = screen.orientation.type.split('-')[0]
            orientationChanged = true
            changeMode(type)
        }

        // 참 크기 조절 탐지
        window.onresize = function () {
            // 화면 회전 이벤트와 겹치지 않도록 방지
            if (orientationChanged) {
                orientationChanged = false
                return
            }

            // 너비 600이하 시 모바일 버전으로 변경
            if (window.innerWidth <= 600)
                changeMode('portrait')
            else
                changeMode('landscape')
        }

        // 모드 초기화
        if (window.innerWidth <= 600)
            changeMode('portrait')
        else
            changeMode(screen.orientation.type.split('-')[0])
    }
}