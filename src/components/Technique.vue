<template>
    <div class="technique" level="{{level}}">
        <div class="title"><slot></slot></div>
        <div class="progress">
            <div class="progress-bar" role="progressbar"
                 aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            </div>
    </div>
</template>

<script>

export default {
    props: ['level']
};

</script>

<style lang="sass">

@import '../shared';

.technique {
    float: left;
    width: 50%;
    padding: 0 20px;

    @media (min-width: 880px) { width: 33.33%; }
    @media (min-width: 980px) { width: 50%; }
    @media (min-width: 1200px) { width: 33.33%; }
    @media (min-width: 1500px) { width: 33.33%; }
    @media (min-width: 1800px) { width: 16.66%; }

    .title {
        float: left;
        width: 110px;
    }

    .progress {
        background-color: #ddd;
    }

    &[level='1'] .progress-bar { background-color: nth($theme-colors, 5); width: 30%; }
    &[level='2'] .progress-bar { background-color: nth($theme-colors, 4); width: 60%; }
    &[level='3'] .progress-bar { background-color: nth($theme-colors, 3); width: 90%; }
}

</style>
