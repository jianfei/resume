<template>
    <div id="app">
        <app-sidebar></app-sidebar>
        <app-body></app-body>
    </div>
</template>

<script>

import AppSidebar from './components/AppSidebar.vue';
import AppBody from './components/AppBody.vue';

export default {
    components: {
        AppSidebar,
        AppBody
    }
};

</script>

<style lang="sass">

@import './vendor/normalize.css';
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

html,
body,
#app {
    height: 100%;
}

body {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 1.2;
}

html,
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li {
    margin: 0;
    padding: 0;
}

a,
a:link,
a:hover,
a:active,
a:visited {
    text-decoration: none;
    color: inherit;
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
    min-width: 1000px;
    margin: 0 auto;
}

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

</style>
