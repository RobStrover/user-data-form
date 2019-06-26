<template>

    <div class="form-group">
        <label :for="fieldId">{{ field.label }}</label>
        <textarea class="form-control" :name="field.name" :id="fieldId" rows="3"></textarea>
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