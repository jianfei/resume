<template>
    <div id="skills">
        <div class="skill">
            <div class="title">Front-end Web Development</div>
            <p>Be able to develop high-quality web pages using HTML5, CSS3 and JavaScript. Versed in modern web libraries and tools such as jQuery, Underscore.js, Lodash.js and ECharts</p>
        </div>

        <div class="skill">
            <div class="title">Web App Development</div>
            <p>Be able to develop web apps using modern web frameworks and technologies such as AngularJS, VueJS, Jasmine, Typescript, Git. Familiar with software design patterns.</p>
        </div>

        <div class="skill">
            <div class="title">Responsive Web Development</div>
            <p>Be able to create cross-browser compatible and mobile responsive websites. Make your websites nice and fit on PC, iPhone, iPad, Kindle and all screen resolutions.</p>
        </div>

        <div class="skill">
            <div class="title">CMS Platform Development</div>
            <p>Versed in Drupal, which is one of the most widely used CMS platforms in the world. I have built more than 10 large-scale websites which are used by thousands of people every day.</p>
        </div>

        <div class="tech-title">Technical Skills</div>
        <ul class="tech-list">
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>LESS</li>
            <li>SASS</li>
            <li>Bootstrap</li>
            <li>AngularJS</li>
            <li>VueJS</li>
            <li>ActionScript</li>
            <li>PHP</li>
            <li>Drupal</li>
            <li>Photoshop</li>
            <li>NPM</li>
            <li>Bower</li>
            <li>Gulp</li>
            <li>Webpack</li>
            <li>Jasmine</li>
            <li>Karma</li>
            <li>Lodash.js</li>
            <li>Underscore.js</li>
            <li>ECharts</li>
            <li>Git</li>
            <li>Typescript</li>
            <li>Babel.js</li>
        </ul>
    </div>
</template>

<script>

export default {
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


        @media (min-width: 1300px) {
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

    .tech-title {
        margin-bottom: 10px;

        font-size: 18px;
        font-weight: 700;
    }

    .tech-list {
        list-style-type: none;

        li {
            float: left;
            width: 240px;
        }
    }
}

</style>
