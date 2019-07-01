<template>

    <p class="text-center">{{ feedbackMessage }}</p>

</template>

<script>

    export default {

        computed: {
            feedbackMessage() {
                const failureMessage = this.$store.state.siteFormData.failureMessage;
                const successMessage = this.$store.state.siteFormData.successMessage;

                if (failureMessage) return failureMessage;
                if (successMessage) return successMessage;
            }
        }

    }

</script>