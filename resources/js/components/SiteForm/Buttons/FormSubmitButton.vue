<template>

    <button :disabled="formIsSubmitting || formIsNotValid" class="btn btn-success btn-block" @click="submitForm()">
        <span v-if="formIsSubmitting" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span v-if="formIsSubmitting">Please wait...</span>
        <span v-else>Submit</span>
    </button>

</template>

<script>

    export default {

        computed: {
            formIsSubmitting() {
                return this.$store.state.siteFormData.submitting
            },
            formIsNotValid() {
                return this.$store.state.siteFormData.isValid
            }
        },

        methods: {
            submitForm() {
                this.$store.dispatch('siteFormData/clearValidationMessages');
                this.$store.dispatch('siteFormData/submitForm');
            },
        }

    }

</script>