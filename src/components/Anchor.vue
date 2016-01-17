<template>
    <a class="anchor" :class="{watching: isWatching}"
       @click.prevent="onClick">
        <span><slot></slot></span>
    </a>
</template>

<script>

import $ from 'jquery';

export default {
    data() {
        return {
            isWatching: false
        };
    },
    methods: {
        onClick() {
            var scrollTop = $(this.$el.hash).position().top;
            $('#app-body').animate({scrollTop: scrollTop}, 300);
        }
    },
    events: {
        ['hash-change']() {
            this.isWatching = location.hash === this.$el.hash;
        }
    }
};

</script>

<style lang="sass">

@import '../Shared';

#anchor-list {

    @for $i from 1 through 10 {
        .group[group="resume"] .anchor:nth-child(#{$i}):after {
            background-color: nth($dark-colors, $i);
            border-bottom: 1px solid nth($dark-colors, $i);
        }

        .group[group="portfolio"] .anchor:nth-child(#{$i}):after {
            background-color: nth($dark-colors, ($i + 4) % 10 + 1);
            border-bottom: 1px solid nth($dark-colors, ($i + 4) % 10 + 1);
        }
    }

    .anchor {
        position: relative;
        display: block;
        padding: 10px 20px;

        color: #777;
        border-bottom: 1px solid #ddd;
        cursor: pointer;

        transition: all .3s ease;

        &:before {
            content: '';
            position: relative;
            z-index: 10;

            display: inline-block;
            vertical-align: -1px;
            width: 30px;
            height: 12px;
        }

        &:after {
            content: '';

            position: absolute;
            top: 0;
            bottom: -1px;
            left: 0;

            width: 6px;

            background-color: nth($dark-colors, 1);
            border-bottom: 1px solid nth($dark-colors, 1);
            transition: all .3s ease;
        }

        &:hover,
        &.watching {
            color: white;

            &:after {
                width: 100%;
            }
        }

        &:not(.watching):hover {
            text-indent: 10px;
        }

        &.watching {
            font-weight: 600;

            &:before {
                background: url(../assets/icon-eye.png) no-repeat;
            }
        }

        span {
            position: relative;
            z-index: 10;
        }

    }

}

</style>