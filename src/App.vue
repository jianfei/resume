<template>
    <div id="app">
        <app-sidebar></app-sidebar>
        <app-body></app-body>
    </div>
</template>

<script>

export default {
    components: {
        AppSidebar : require('./components/AppSidebar.vue'),
        AppBody    : require('./components/AppBody.vue')
    }
};

</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

html,
body,
#app {
    height: 100%;
}

body {
    a,
    a:link,
    a:hover,
    a:active,
    a:visited {
        text-decoration: none;
        color: inherit;
    }
}

button {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;

    text-transform: inherit;
    cursor: pointer;
    background-color: transparent;
}

#app {
    position: relative;
    min-width: 720px;
    margin: 0 auto;

    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 1.4;
}

    @media (min-width: 980px) {
        #app-sidebar {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;

            width: 240px;
        }

        #app-body {
            position: absolute;
            top: 0;
            left: 240px;
            right: 0;
            bottom: 0;
        }
    }

</style>
