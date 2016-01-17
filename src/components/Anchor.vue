<template>
    <a class="anchor">
        <span><slot></slot></span>
    </a>
</template>

<script>

export default {
};

</script>

<style lang="sass">

@import '../Shared';

#anchor-list {

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

        @for $i from 1 through 10 {
            &:nth-child(#{$i}):after {
                background-color: nth($dark-colors, $i);
                border-bottom: 1px solid nth($dark-colors, $i);
            }
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