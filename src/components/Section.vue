<template>
    <div id="{{title | kebabCase}}" class="sec">
        <div class="sec-title"><span class="txt">{{title}}</span></div>
        <div class="sec-content"><slot></slot></div>
    </div>
</template>

<script>

import _ from 'lodash';

export default {
    props: ['title'],
    filters: {
        'kebabCase': _.kebabCase
    }
};

</script>

<style lang="sass">

@import '../shared';

.sec {
    padding: 40px 60px;

    @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
            .sec-title {
                border-bottom: 1px solid nth($dark-colors, $i);

                .txt {
                    background-color: nth($dark-colors, $i);
                }
            }
        }
    }

    &:after {
        content: '';
        display: block;
        clear: both;
    }
}

    .sec-title {
        margin-bottom: 30px;

        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;

        .txt {
            display: inline-block;
            padding: 6px 20px;

            color: white;
        }
    }

</style>
