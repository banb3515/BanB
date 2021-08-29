<template>
    <div>
        <h1 id="title">{{ $route.params.title }}</h1>
        <p>프로젝트 세부사항 페이지는 개발 중입니다.</p>
        <b-button href="#" v-on:click="goBack" variant="primary">이전 페이지로 돌아가기</b-button> &nbsp;
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        methods: {
            goBack: function () {
                history.back()
            }
        }
    }
</script>

<style>
</style>