<template>

    <div class="form-group">
        <label :for="fieldId">{{ field.label }}</label>
        <input type="tel" class="form-control" :name="field.name" :id="fieldId">
    </div>

</template>

<script>

    export default {

        props: [ 'section', 'index', 'field'],

        computed: {
            fieldId() {
                return `section-${this.section}-field-${this.index}`
            }
        }

    }

</script>