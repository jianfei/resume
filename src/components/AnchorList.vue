<template>
    <div id="anchor-list">
        <div group="resume" class="grp-label">Resume</div>
        <div class="group">
            <anchor class="watching">Profile</anchor>
            <anchor>Skills</anchor>
            <anchor>Technical</anchor>
            <anchor>Education</anchor>
            <anchor>Experiences</anchor>
            <anchor>Hire Me!</anchor>
        </div>

        <div group="showcase" class="grp-label">Showcase</div>
        <div class="group">
            <anchor>Demo</anchor>
            <anchor>Screenshots</anchor>
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
        &[group="showcase"]:before { content: '\e118'; }
    }

}

</style>