<template>
    <div id="anchor-list">
        <div group="resume" class="grp-label">Resume</div>
        <div group="resume" class="group">
            <anchor href="#profile">Profile</anchor>
            <anchor href="#skills">Skills</anchor>
            <anchor href="#experiences">Experiences</anchor>
            <anchor href="#education">Education</anchor>
            <anchor href="#hire-me">Hire Me!</anchor>
        </div>

        <div group="portfolio" class="grp-label">Portfolio</div>
        <div group="portfolio" class="group">
            <anchor href="#demo">Demo</anchor>
            <anchor href="#screenshots">Screenshots</anchor>
        </div>
    </div>
</template>

<script>

import Anchor from './Anchor.vue';

export default {
    components: {
        Anchor
    }
};

</script>

<style lang="sass">

#anchor-list {

    .grp-label {
        padding: 20px;

        font-weight: 700;
        text-transform: uppercase;

        color: #777;
        border-bottom: 1px solid #ddd;

        &:before {
            display: inline-block;
            vertical-align: -1px;
            width: 30px;

            font-family: 'Glyphicons Halflings';
        }

        &[group="resume"]:before { content: '\e008'; }
        &[group="portfolio"]:before { content: '\e118'; }
    }

}

</style>