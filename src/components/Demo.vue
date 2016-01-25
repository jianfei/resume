<template>
    <div id="demo">
        <a href="http://fo3.garena.com/home" target="_blank">
            <div class="img-wrapper"><img src="../assets/portfolio/cms-1.jpg"></div>
        </a>
        <a href="http://kakibolaclash.fo3.garena.com/" target="_blank">
            <div class="img-wrapper"><img src="../assets/portfolio/cms-2.jpg"></div>
        </a>
        <a href="http://live.garena.com/" target="_blank">
            <div class="img-wrapper"><img src="../assets/portfolio/cms-3.jpg"></div>
        </a>
        <a href="http://alphacup.ava.garena.com/" target="_blank">
            <div class="img-wrapper"><img src="../assets/portfolio/cms-4.jpg"></div>
        </a>
        <a href="http://weekendcup.lol.garena.com/" target="_blank">
            <div class="img-wrapper"><img src="../assets/portfolio/cms-5.jpg"></div>
        </a>
        <a href="http://pbic.pb.garena.com/" target="_blank">
            <div class="img-wrapper"><img src="../assets/portfolio/cms-6.jpg"></div>
        </a>
    </div>
</template>

<script>

export default {
};

</script>

<style lang="sass">

@import '../shared';

#demo {
    margin: 0 -10px;

    font-size: 0;

    .img-wrapper {
        position: relative;
        display: inline-block;
        vertical-align: top;
        width: 50%;
        padding: 0 10px;
        margin-bottom: 20px;

        @media (min-width: 1400px) {
            width: 33.33%;
        }

        &:hover:before {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 10px;
            right: 10px;
            z-index: 1;

            padding-top: 20%;

            content: 'View Online Demo';
            font-size: 30px;
            font-weight: bold;
            text-align: center;

            color: white;
            background: rgba(nth($dark-colors, 6), .9);
        }

        img {
            width: 100%;
            height: auto;

            border: 4px solid nth($dark-colors, 6);
        }
    }
}

</style>
