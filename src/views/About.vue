<template>
    <div>
        <h1 id="title">About</h1>
        <div>
            <!-- Git -->
            <div class="section">
                <a href="https://gitlab.com/BanB3515" title="GitLab 이동"><b-img :src="require('@/assets/logo/GitLab.png')" class="logo logo-small" alt="GitLab"></b-img></a>
                <a href="https://github.com/banb3515" title="GitHub 이동"><b-img :src="require('@/assets/logo/GitHub.png')" class="logo logo-small" alt="GitHub"></b-img></a>
            </div>

            <!-- SNS -->
            <div class="section">
                <a href="https://www.facebook.com/banb3515" title="Facebook 이동"><b-img :src="require('@/assets/logo/Facebook.png')" class="logo logo-medium" alt="GitHub"></b-img></a>
            </div>

            <!-- Contact -->
            <div class="section">
                <a href="mailto:banb3515@gmail.com?body=# BanB Website%0D%0A%0D%0A%0D%0A-" title="(banb3515@gmail.com) 메일 작성"><b-img :src="require('@/assets/logo/Gmail.png')" class="logo logo-small" alt="banb3515@gmail.com"></b-img></a>
                <a href="mailto:banb3515@outlook.kr?body=# BanB Website%0D%0A%0D%0A%0D%0A-" title="(banb3515@outlook.kr) 메일 작성"><b-img :src="require('@/assets/logo/Outlook.png')" class="logo logo-small" alt="banb3515@outlook.kr"></b-img></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About'
    }
</script>

<style>
    /* About Style */
    @import url("../css/about.css");
</style>