<template>

    <button class="btn btn-primary btn-block" @click="navigateToPreviousSection">Previous</button>

</template>

<script>

    export default {

        methods: {
            navigateToPreviousSection() {
                this.$store.dispatch('siteFormData/bumpSection', 'previous');
            }
        }

    }

</script>