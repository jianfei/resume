<template>
    <div id="profile">
        <p>A <strong>Front-end Web Developer</strong> with 3 years of freelance experience + 3 years of full-time experience in front-end web developing. A highly motivated quick-learner, adaptable and hard-working person with strong technical skills. Possess strong capability to write high-quality, high-performance and clean code to build websites and web applications.</p> <br>

        <p><strong>Personal Information:</strong></p>
        <div id="list-data">
            <data-block label="Gender">Male</data-block>
            <data-block label="Age">28</data-block>
            <data-block label="Marital Status">Married</data-block>
            <data-block label="Current Location">Singapore</data-block>
            <data-block label="Nationality">China PRC</data-block>
            <data-block label="Race">Chinese</data-block>
            <data-block label="Religion">Free Thinker</data-block>
            <data-block label="Pass Holding">Employment Pass</data-block>
            <data-block label="Languages">Chinese, English</data-block>
            <data-block label="Expected Salary">S$5,000+</data-block>
        </div>
    </div>
</template>

<script>

export default {
    components: {
        dataBlock: require('./DataBlock.vue')
    }
};

</script>

<style lang="sass">

@import '../shared';

#profile {
    #list-data {
        padding: 0;
        margin: 0 -10px;
    }
}

</style>
