<template>
    <div id="experiences">
        <div class="job">
            <div class="company">Garena Online PTE LTD Singapore</div>
            <div class="period">July 2013 – Present</div>
            <div class="position">Front-end Web Developer</div>
            <div class="tags">
                <div class="tag">HTML/CSS</div>
                <div class="tag">JavaScript</div>
                <div class="tag">jQuery</div>
                <div class="tag">LESS</div>
                <div class="tag">SASS</div>
                <div class="tag">AngularJS</div>
                <div class="tag">VueJS</div>
                <div class="tag">PHP</div>
                <div class="tag">Drupal</div>
                <div class="tag">Git</div>
            </div>
            <div class="scope">
            <ul>
                <li>Responsible for building websites for PC games, such as League of Legends, FIFA Online 3 and Blackshot.</li>
                <li>Perform website maintenance and enhancements.</li>
                <li>Work closely with the design team and project managers and ensured projects are delivered in a timely manner.</li>
                <li>Work closely with backend developers to integrate backend services.</li>
            </ul>
            </div>
        </div>

        <div class="job">
            <div class="company">Blue Rain Studios LLP</div>
            <div class="period">January 2011 – December 2012</div>
            <div class="position">Front-end Web Developer (Freelancer)</div>
            <div class="tags">
                <div class="tag">HTML/CSS</div>
                <div class="tag">JavaScript</div>
                <div class="tag">jQuery</div>
                <div class="tag">PHP</div>
                <div class="tag">Git</div>
            </div>
            <div class="scope">Responsible for designing, developing and maintaining a hotel booking and reservation management system for a travel agent company: Crest Travel & Tours Pte Ltd. The officiers use this application to manage all the hotel bookings and reservations. It was quite a large-scale system with complicated business logics.</div>
        </div>

        <div class="job">
            <div class="company">Blue Rain Studios LLP</div>
            <div class="period">Auguest 2010 – January 2011</div>
            <div class="position">Front-end Web Developer (Freelancer)</div>
            <div class="tags">
                <div class="tag">Adobe Flex</div>
                <div class="tag">ActionScript</div>
                <div class="tag">aviSynth</div>
            </div>
            <div class="scope">Cooperated with Singapore Art Museum, responsible for designing and building a web application for Singapore Biennale 2011. This web application allows user to create, edit, save and manage slideshows with music online, and export the slideshow to video through aviSynth. It is used for children paticipating in the event to produce stories with their drawings.</div>
        </div>

        <div class="job">
            <div class="company">Personal E-motion PTE LTD</div>
            <div class="period">Auguest 2009 – November 2009</div>
            <div class="position">Programmer (Part-time)</div>
            <div class="tags">
                <div class="tag">Adobe Flex</div>
                <div class="tag">ActionScript</div>
            </div>
            <div class="scope">Contributed to their flagship product "KooBits".</div>
        </div>
    </div>
</template>

<script>

export default {
};

</script>

<style lang="sass">

@import '../shared';

#experiences {
    .job {
        margin-bottom: 30px;

        .position {
            margin-bottom: 10px;

            font-weight: 600;
            font-style: italic;
            color: #444;
        }

        .company {
            display: inline-block;
            margin-right: 10px;

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

        .tag {
            display: inline-block;
            padding: 2px 6px;
            margin-bottom: 10px;

            font-size: 12px;

            background-color: nth($dark-colors, 1);
            color: white;
            border-radius: 5px;

            & + .tag {
                margin-left: 4px;
            }
        }
    }
}

</style>
