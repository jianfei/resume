<template>
    <div id="hire-me">
        <p>Hi! If you think I am qualified, please send me an email: <strong>{{email}}</strong>.</p>
        <button class="btn btn-primary"
                @click="copyToClipboard">Click to Copy My Email Address</button>
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
