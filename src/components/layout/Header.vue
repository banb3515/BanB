<template>
    <b-navbar toggleable type="dark" variant="dark">
        <b-navbar-brand href="/"><b>BanB</b></b-navbar-brand>

        <b-navbar-toggle target="navbar-toggle-collapse" id="nav-btn">
            <template #default="{ expanded }">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="/Profile">Profile</b-nav-item>
                <b-nav-item href="/Project">Project</b-nav-item>
                <b-nav-item href="/About">About</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
    export default {
        name: 'Header'
    }
</script>
