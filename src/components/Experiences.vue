<template>
    <div id="experiences">
        <div class="job">
            <div class="company">Garena Online PTE LTD Singapore</div>
            <div class="period">July 2013 – Present</div>
            <div class="tags">
                <div class="tag">HTML/CSS</div>
                <div class="tag">JavaScript</div>
                <div class="tag">jQuery</div>
                <div class="tag">LESS</div>
                <div class="tag">SASS</div>
                <div class="tag">AngularJS</div>
                <div class="tag">VueJS</div>
                <div class="tag">Python</div>
                <div class="tag">PHP</div>
                <div class="tag">Drupal</div>
                <div class="tag">Git</div>
            </div>
            <div class="scope">Working as a full-time web developer. The job is to collaborate with product managers, designers, and backend engineers to build all kinds of websites.</div>
        </div>

        <div class="job">
            <div class="company">Blue Rain Studios LLP</div>
            <div class="period">January 2011 – December 2012</div>
            <div class="tags">
                <div class="tag">HTML/CSS</div>
                <div class="tag">JavaScript</div>
                <div class="tag">jQuery</div>
                <div class="tag">PHP</div>
                <div class="tag">Git</div>
            </div>
            <div class="scope">Worked as a freelance web developer, designed and developed a hotel booking and reservation management system for a travel agent company: Crest Travel & Tours Pte Ltd. The application helps the officiers to view the status and manage all the bookings everyday. It is quite a large system with very complicated business logics.</div>
        </div>

        <div class="job">
            <div class="company">Blue Rain Studios LLP</div>
            <div class="period">Auguest 2010 – January 2011</div>
            <div class="tags">
                <div class="tag">Adobe Flex</div>
                <div class="tag">ActionScript</div>
                <div class="tag">aviSynth</div>
            </div>
            <div class="scope">Worked as a freelance web developer, cooperated with Singapore Art Museum, developed a web-based animation tool for Singapore Biennale 2011. It allows user to create, edit, save, manage slideshow online and finally converted the slideshow to video through aviSynth. The children paticipating the event used this tool to upload their drawings, add music and produce a storyline.</div>
        </div>

        <div class="job">
            <div class="company">Personal E-motion PTE LTD</div>
            <div class="period">Auguest 2009 – November 2009</div>
            <div class="tags">
                <div class="tag">Adobe Flex</div>
                <div class="tag">ActionScript</div>
            </div>
            <div class="scope">Worked as a part-time programmer worked on rich Internet application development. Contributed to build their flagship product "KooBits" using Adobe Flex and ActionScript 3.0.</div>
        </div>
    </div>
</template>

<script>

export default {
};

</script>

<style lang="sass">

#experiences {
    .job {
        margin-bottom: 30px;

        .company {
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;

            font-weight: 700;
            text-transform: uppercase;
        }

        .period {
            display: inline-block;
            vertical-align: middle;

            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .tag {
            display: inline-block;
            padding: 2px 6px;
            margin-bottom: 10px;

            font-size: 12px;

            background-color: #777;
            color: white;
            border-radius: 5px;

            & + .tag {
                margin-left: 4px;
            }
        }
    }
}

</style>
