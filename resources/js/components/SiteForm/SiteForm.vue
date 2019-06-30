<template>

    <div class="site-form__section-parent accordion">
        <FormSection v-for="(formSection, index) in formSections" :index="index" :key="index"  :sectionData="formSection" />
    </div>

</template>

<script>

    import FormSection from './FormSection'

    export default {

        components: { FormSection },

        computed: {
            formSections() {
                return this.$store.state.siteFormData.formSections
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