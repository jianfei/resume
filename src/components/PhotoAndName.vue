<template>
    <div id="photo-and-name">
        <div class="content">
            <div class="photo"><img src="../assets/photo.jpg" width="112" height="112"></div>
            <div class="job-title">Front-end Web Developer <br>Senior Associate @ Garena</div>
            <div class="name">Zhang Jianfei</div>
        </div>
    </div>
</template>

<script>

export default {
};

</script>

<style lang="sass">

@import '../shared';

#photo-and-name {
    padding: 20px;

    text-align: center;
    color: white;
    background-color: nth($dark-colors, 3);

    .photo {
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 auto;
        overflow: hidden;

        border: 4px solid white;
        border-radius: 120px;
    }

    .job-title {
        margin-top: 10px;

        font-size: 12px;
        font-weight: 300;
        text-transform: uppercase;
        opacity: .7;
    }

    .name {
        font-size: 20px;
        font-weight: 600;
    }

    @media (max-width: 979px) {
        .content {
            width: 360px;
            height: 130px;
            margin: 0 auto;
        }

        .photo {
            float: left;
        }

        .job-title {
            font-size: 14px;
            padding-top: 24px;
        }

        .name {
            font-size: 24px;
        }
    }

}

</style>