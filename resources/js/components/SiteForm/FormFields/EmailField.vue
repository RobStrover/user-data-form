<template>

    <div class="form-group">
        <label :for="fieldId">{{ `${field.label}:` }}</label>
        <input type="email" v-model="inputValue" :class="formClass" :id="fieldId">
        <InvalidFeedback :fieldName="field.name" :errors="fieldErrors"/>
    </div>

</template>

<script>

    import InvalidFeedback from '../Validation/InvalidFeedback';

    export default {

        props: [ 'section', 'index', 'field'],

        components: { InvalidFeedback },

        data: function() {
            return {
                inputValue: null
            }
        },

        watch: {
            inputValue() {
                this.updateStore();
            }
        },

        methods: {
            updateStore() {
                const inputData = {
                    'sectionId': this.section,
                    'fieldName': this.field.name,
                    'fieldValue': this.inputValue
                };

                this.$store.dispatch('siteFormData/updateFieldValue', inputData);
            }
        },

        computed: {
            fieldId() {
                return `section-${this.section}-field-${this.index}`
            },
            fieldErrors() {
                return this.$store.state.siteFormData.fieldValidationMessages
                    .filter(validationMessage => { return validationMessage.fieldName == this.field.name });
            },
            formClass() {
                if (this.fieldErrors.length) return `form-control is-invalid`;
                return 'form-control'
            }
        }

    }

</script>

<style lang="scss" scoped>

    label {
        margin-bottom: 0;
        font-weight: bold;
    }

    input {
        border-radius: 10px;
        border: none;
    }



</style>