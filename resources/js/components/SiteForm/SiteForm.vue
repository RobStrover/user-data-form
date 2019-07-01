<template>

    <div class="site-form__section-parent accordion">
        <FormSection v-if="!submissionDone" v-for="(formSection, index) in formSections" :index="index" :key="index"  :sectionData="formSection" />
        <FormFeedback />
    </div>

</template>

<script>

    import FormSection from './FormSection'
    import FormFeedback from './Validation/FormFeedback'

    export default {

        components: { FormSection, FormFeedback },

        computed: {
            formSections() {
                return this.$store.state.siteFormData.formSections
            },
            submissionDone() {
                if (this.$store.state.siteFormData.successMessage) return true;
                return false;
            }
        }

    }

</script>

<style lang="scss" scoped>

    .site-form__section-parent {
        padding: 4px;
        background-color: white;
        border-radius: 10px;
    }

</style>