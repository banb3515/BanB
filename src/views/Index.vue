<template>
    <div>
        <!-- Profile Card -->
        <b-card title="프로필"
                sub-title="(Profile)"
                :img-src="require('@/assets/thumbnail/Profile.png')"
                img-alt="Profile"
                img-top
                style="max-width: 30rem;">
            <b-card-text>
                학력, 경력에 대해 확인할 수 있습니다.
            </b-card-text>
            <b-button href="/Profile" variant="primary">Go to Profile</b-button>
        </b-card>

        <!-- Portfolio Card -->
        <b-card title="프로젝트"
                sub-title="(Project)"
                :img-src="require('@/assets/thumbnail/Project.png')"
                img-alt="Project"
                img-top
                style="max-width: 30rem;">
            <b-card-text>
                현재까지 개발한 프로젝트를 확인할 수 있습니다.
            </b-card-text>
            <b-button href="/Project" variant="primary">Go to Project</b-button>
        </b-card>

        <!-- About Card -->
        <b-card title="정보"
                sub-title="(About)"
                :img-src="require('@/assets/thumbnail/About.png')"
                img-alt="About"
                img-top
                style="max-width: 30rem;">
            <b-card-text>
                GitLab, GitHub 또는 SNS로 이동하거나<br>
                연락처를 확인할 수 있습니다.
            </b-card-text>
            <b-button href="/About" variant="primary">Go to About</b-button>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Index'
    }
</script>

<style>
    /* Index Style */
    @import url("../css/index.css");
</style>