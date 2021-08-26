<template>
    <div>
        <h1 id="title">404 - Not Found</h1>

        <p>
            <a :href="url">{{ url }}</a><br>
            페이지를 찾을 수 없습니다.
        </p>

        <p>
            <b-button href="#" v-on:click="goBack" variant="secondary">이전 페이지로</b-button> &nbsp;
            <b-button href="/" variant="primary">메인 화면으로</b-button>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Not Found',
        data() {
            return {
                url: window.location.href
            }
        },
        methods: {
            goBack: function () {
                history.back()
            }
        }
    }
</script>

<style>
</style>