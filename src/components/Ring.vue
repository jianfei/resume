<template>
    <div class="ring">
        <div class="circle" v-el:circle></div>
        <slot></slot>
    </div>
</template>

<script>

import $ from 'jquery';
import 'jquery-circle-progress';

export default {
    props: ['value', 'color'],

    ready() {
        $(this.$els.circle).circleProgress({
            size      : 250,
            thickness : 25,
            value     : this.value,
            fill      : { color: this.color }
        });
    }
};

</script>

<style lang="sass">

@import '../shared';

.ring {
    position: relative;

    box-sizing: border-box;
    width: 250px;
    height: 250px;
    padding-top: 70px;
    padding-left: 10px;
    margin: 0 auto 20px;

    font-size: 80px;
    font-weight: 600;
    text-align: center;

    color: #444;

    .circle {
        position: absolute;
        top: 0;
        left: 0;
    }

    .percent {
        display: inline-block;
        vertical-align: 34px;
        font-size: 30px;
    }
}

</style>
