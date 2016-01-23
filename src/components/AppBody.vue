<template>
    <div id="app-body" @scroll="scrollHandler">
        <v-section title="Profile"><profile></profile></v-section>
        <v-section title="Skills"><skills></skills></v-section>
        <v-section title="Experiences"><experiences></experiences></v-section>
        <v-section title="Education"><education></education></v-section>
        <v-section title="Hire Me"><hire-me></hire-me></v-section>
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
