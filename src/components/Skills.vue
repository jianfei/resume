<template>
    <div id="skills">
        <div class="skill">
            <ring value=".9" color="#2ec7c9">90<span class="percent">%</span></ring>
            <div class="title">Front-end Web Development</div>
            <p>Capability to develop high-quality web pages using HTML5, CSS3 and JavaScript. Strong understanding of industry trends. Versed in modern web libraries and tools. </p>
        </div>

        <div class="skill">
            <ring value=".8" color="#b6a2de">80<span class="percent">%</span></ring>
            <div class="title">Web App Development</div>
            <p>Capability to develop web apps using modern web frameworks like AngularJS and VueJS. Strong understanding of MVC, MVP, MVVM frameworks and design patterns.</p>
        </div>

        <div class="skill">
            <ring value=".7" color="#5ab1ef">70<span class="percent">%</span></ring>
            <div class="title">Responsive Web Development</div>
            <p>Capability to create cross-browser compatible and mobile responsive websites which fit on all screen resolutions. Experienced in optimizing websites for mobile devices.</p>
        </div>

        <div class="skill">
            <ring value=".7" color="#ffb980">70<span class="percent">%</span></ring>
            <div class="title">CMS Platform Development</div>
            <p>Capability to build CMS Websites. Versed in Drupal, which is one of the most widely used CMS platforms in the world. Specializing in theme development.</p>
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
        Technique : require('./Technique.vue'),
        Ring      : require('./Ring.vue')
    }
};

</script>

<style lang="sass">

@import '../shared';

#skills {
    .skill {
        float: left;
        box-sizing: border-box;
        width: 50%;
        min-height: 100px;
        margin-bottom: 30px;

        text-align: center;

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
            white-space: nowrap;
        }

        @for $i from 1 through 10 {
            &:nth-child(#{$i}) .title {
                color: nth($dark-colors, $i);
            }
        }

        p {
            text-align: left;
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
