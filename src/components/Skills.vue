<template>
    <div id="skills">
        <div class="skill">
            <div class="title">Front-end Web Development</div>
            <p>Be able to develop high-quality web pages using HTML5, CSS3 and JavaScript. Versed in modern web libraries and tools such as jQuery, Underscore.js, Lodash.js, ECharts and so on.</p>
        </div>

        <div class="skill">
            <div class="title">Web App Development</div>
            <p>Be able to develop web apps using modern web frameworks and technologies such as AngularJS, VueJS, Jasmine, Karma, Typescript, ES6, Git, and so on. Familiar with design patterns.</p>
        </div>

        <div class="skill">
            <div class="title">Responsive Web Development</div>
            <p>Be able to create cross-browser compatible and mobile responsive websites. Make your websites nice and fit on PC, iPhone, iPad, Kindle and all screen resolutions.</p>
        </div>

        <div class="skill">
            <div class="title">CMS Platform Development</div>
            <p>Versed in Drupal, which is one of the most widely used CMS platforms in the world. Built more than 10 large-scale websites which are used by thousands of people every day.</p>
        </div>

        <div class="technique-title">Technical Skills</div>
        <div class="technique-list">
            <technique level="3">HTML/CSS</technique>
            <technique level="3">JavaScript</technique>
            <technique level="3">jQuery</technique>
            <technique level="3">LESS</technique>
            <technique level="3">SASS</technique>
            <technique level="3">Bootstrap</technique>
            <technique level="2">AngularJS</technique>
            <technique level="3">VueJS</technique>
            <technique level="3">ActionScript</technique>
            <technique level="1">PHP</technique>
            <technique level="2">Drupal</technique>
            <technique level="3">Photoshop</technique>
            <technique level="3">NPM</technique>
            <technique level="3">Bower</technique>
            <technique level="2">Gulp</technique>
            <technique level="2">Webpack</technique>
            <technique level="1">Jasmine</technique>
            <technique level="1">Karma</technique>
            <technique level="3">Lodash.js</technique>
            <technique level="3">Underscore.js</technique>
            <technique level="2">ECharts</technique>
            <technique level="3">Git</technique>
            <technique level="2">Typescript</technique>
            <technique level="3">Babel.js</technique>
        </div>
    </div>
</template>

<script>

export default {
    components: {
        Technique: require('./Technique.vue')
    }
};

</script>

<style lang="sass">

#skills {
    .skill {
        float: left;
        box-sizing: border-box;
        width: 50%;
        min-height: 100px;
        margin-bottom: 30px;

        &:nth-child(2n+1) { padding-right: 15px; }
        &:nth-child(2n) { padding-left: 15px; }

        @media (min-width: 1600px) {
            width: 25%;
            padding: 0 10px;

            &:first-child { padding-left: 0; padding-right: 20px; }
            &:last-child  { padding-left: 20px; padding-right: 0; }
        }

        .title {
            font-size: 20px;
            font-weight: 700;
        }
    }

    .technique-title {
        clear: both;
        margin-bottom: 10px;

        font-size: 18px;
        font-weight: 700;
    }

    .technique-list {
        margin: 0 -20px;
    }
}

</style>
