<template>
    <div id="hire-me">
        <p>Hi! If you think I am qualified, please send me an email: <strong>{{email}}</strong> with following details:</p>
        <ul>
            <li>Company Name and Location</li>
            <li>Working Hours</li>
            <li>Team Size</li>
            <li>Job Scope</li>
            <li>Job Requirements</li>
            <li>Salary Offered</li>
            <li>Staff Benefits</li>
        </ul>
        <p>And we shall discuss more later.</p>
        <br>
        <button class="btn btn-primary"
                @click="copyToClipboard">Click Here to Copy My Email Address</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            email: 'jianfei.otaku@gmail.com'
        };
    },
    methods: {
        copyToClipboard() {
            window.prompt('Copy to clipboard: Ctrl+C, Enter', this.email);
        }
    }
};

</script>

<style lang="sass">

@import '../shared';

#hire-me {
    .email {
        font-weight: 600;
    }
}

</style>
