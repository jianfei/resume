<template>
    <div id="app-body" @scroll="scrollHandler">
        <sec title="Profile"><profile></profile></sec>
        <sec title="Skills"><skills></skills></sec>
        <sec title="Experiences"><experiences></experiences></sec>
    </div>
</template>

<script>

import $ from 'jquery';

import Section from './Section.vue';
import Profile from './Profile.vue';
import Skills from './Skills.vue';
import Experiences from './Experiences.vue';

export default {
    components: {
        Sec: Section,
        Profile,
        Skills,
        Experiences
    },
    methods: {
        scrollHandler() {
            let root = this.$root;
            let currTop = $(this.$el).scrollTop();
            let currHash = location.hash || '#profile';
            let lastHash;

            $('.sec').each(function(index, el) {
                let top = $(el).position().top;
                let hash = '#' + $(el).attr('id');

                if (currTop < top) {
                    return false;
                }

                lastHash = hash;
            });

            if (lastHash && lastHash !== currHash) {
                location.hash = lastHash;
                root.$broadcast('hash-change');
            }
        }
    }
};

</script>

<style lang="sass">

@import '../shared';

#app-body {
    font-size: 16px;

    color: #777;
    overflow-x: hidden;
    overflow-y: auto;

    transition: all .3s ease;
}

</style>
