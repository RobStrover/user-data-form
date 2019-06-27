<template>

    <div class="form-group">
        <label :for="fieldId">{{ field.label }}</label>
        <textarea v-model="inputValue" class="form-control" :name="field.name" :id="fieldId" rows="3"></textarea>
    </div>

</template>

<script>

    export default {

        props: [ 'section', 'index', 'field'],

        data: function() {
            return {
                inputValue: null
            }
        },

        watch: {
            inputValue() {
                this.updateStore();
                this.updateValidators();
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
            },
            updateValidators() {
                this.$store.dispatch('siteFormData/updateValidators');
            }
        },

        computed: {
            fieldId() {
                return `section-${this.section}-field-${this.index}`
            }
        }

    }

</script>