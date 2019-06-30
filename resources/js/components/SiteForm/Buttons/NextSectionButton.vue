<template>

    <button class="btn btn-primary btn-block" @click="navigateToNextSection">Next</button>

</template>

<script>

    export default {

        methods: {
            navigateToNextSection() {
                this.$store.dispatch('siteFormData/bumpSection', 'next');
            }
        }

    }

</script>