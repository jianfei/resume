<template>
    <div class="data-block">
        <div class="content">
            <span class="v-label">{{label}}</span>
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    props: ['label']
};

</script>

<style lang="sass">

@import '../shared';

.data-block {
    float: left;
    width: 50%;
    margin-top: 20px;

    color: white;
    white-space: nowrap;

    @media (min-width: 1200px) { width: 33.33%; }
    @media (min-width: 1500px) { width: 25%; }
    @media (min-width: 1800px) { width: 20%; }

    @for $i from 1 through 10 {
        &:nth-child(#{$i}) .content {
            background-color: nth($dark-colors, $i);

            &:before {
                background-image: url(../assets/icon-#{$i}.png);
            }
        }
    }

    .content {
        margin: 0 10px;
        padding: 20px;

        font-size: 20px;
        font-weight: 600;

        &:before {
            content: '';
            float: left;

            width: 40px;
            height: 40px;
            margin-right: 10px;

            background: left center no-repeat;
            background-size: 100% 100%;
        }

        .v-label {
            display: block;

            font-size: 12px;
            font-weight: 400;
            text-transform: uppercase;
        }
    }
}

</style>
