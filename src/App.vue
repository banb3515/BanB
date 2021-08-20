<template>
  <div id="app">
    <div v-show="!$isMobile()" class="empty dark-gradient-background"><wbr></div>

    <div id="container" class="dark-gradient-background" :class="{ 'pc-container': !$isMobile() }">
      <!-- Header -->
      <Header id="header" />

      <!-- View Content -->
      <router-view id="content" class="content"></router-view>
    </div>

    <div v-show="!$isMobile()" class="empty dark-gradient-background"><wbr></div>
  </div>
</template>

<script>
  // Layout
  import Header from './components/layout/Header.vue'

  export default {
    name: 'App',
    components: {
      Header
    }
  }

  // 모드 변경
  let changeMode = function (type) {
    let container = document.getElementById('container')
    let emptys = document.getElementsByClassName('empty')
    let display = ''

    // 모바일 버전
    if (type == 'portrait') {
      display = 'none'
      container.style.width = '100%'
    } 
    // PC 버전
    else if (type == 'landscape')
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
        changeMode(type)
      }

      // 참 크기 조절 탐지
      window.onresize = function () {
        // 너비 600이하 시 모바일 버전으로 변경
        console.log('test')
        if (window.innerWidth <= 600)
          changeMode('portrait')
        else
          changeMode('landscape')
      }

      // 모드 초기화
      changeMode(screen.orientation.type.split('-')[0])
    }
  }
</script>

<style>
  /* Main Style */
  @import url("css/style.css");

  /* Google Web Font */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap');
</style>
