<template>
    <div id="education">
        <div class="study">
            <div class="school">National University of Singapore</div>
            <div class="period">2008-2013</div>
            <div class="desc">Bachelor’s Degree – Computing, communication & media, specialized in interactive media technology.</div>
        </div>
        <div class="study">
            <div class="school">Victoria Junior College</div>
            <div class="period">2006-2007</div>
            <div class="desc">Computing was taken during junior college.</div>
        </div>
        <div class="study">
            <div class="school">Victoria School</div>
            <div class="period">2004-2005</div>
        </div>
    </div>
</template>

<script>

export default {
};

</script>

<style lang="sass">

@import '../shared';

#education {
    .study {
        margin-bottom: 30px;

        .school {
            display: inline-block;
            margin-right: 4px;

            font-weight: 700;
            text-transform: uppercase;
            color: #444;
        }

        .period {
            display: inline-block;

            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
        }
    }
}

</style>
