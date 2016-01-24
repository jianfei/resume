<template>
    <div id="app-body" @scroll="scrollHandler">
        <v-section title="Profile"><profile></profile></v-section>
        <v-section title="Skills"><skills></skills></v-section>
        <v-section title="Experiences"><experiences></experiences></v-section>
        <v-section title="Education"><education></education></v-section>
        <v-section title="Hire Me"><hire-me></hire-me></v-section>
        <v-section title="Demo"><demo></demo></v-section>
        <v-section title="Screenshots"><screenshots></screenshots></v-section>

        <div class="hint">* This profile page is still in Beta Version, Download and Print Feature is coming soon.</div>
    </div>
</template>

<script>

import $ from 'jquery';

export default {
    components: {
        vSection    : require('./Section.vue'),
        Profile     : require('./Profile.vue'),
        Skills      : require('./Skills.vue'),
        Experiences : require('./Experiences.vue'),
        Education   : require('./Education.vue'),
        HireMe      : require('./HireMe.vue'),
        Demo        : require('./Demo.vue'),
        Screenshots : require('./Screenshots.vue')
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

.hint {
    position: absolute;
    top: 10px;
    right: 60px;
    display: none;

    font-size: 12px;

    @media (min-width: 980px) {
        display: block;
    }

}

#app-body {
    font-size: 16px;

    color: #777;
    overflow-x: hidden;
    overflow-y: auto;

    transition: all .3s ease;
}

</style>
