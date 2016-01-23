<template>
    <div id="app-sidebar">
        <photo-and-name></photo-and-name>
        <anchor-list></anchor-list>
    </div>
</template>

<script>

export default {
    components: {
        PhotoAndName: require('./PhotoAndName.vue'),
        AnchorList: require('./AnchorList.vue')
    }
};

</script>

<style lang="sass">

#app-sidebar {
    background-color: #f2f2ea;
    border-right: 1px solid #ddd;
    box-shadow: 0 4px 4px #ddd;
    overflow-x: hidden;
    overflow-y: auto;

    &.slide-transition {
        transition: all .3s ease;
        left: 0;
    }

    &.slide-enter,
    &.slide-leave {
        left: -240px;
    }
}

</style>