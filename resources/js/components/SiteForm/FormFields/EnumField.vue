<template>

    <div class="form-group">
        <label :for="fieldId">{{ field.label }}</label>
        <select class="form-control" :id="fieldId">
            <option v-for="(option, index) in field.options" :key="index" :value="option">{{ option }}</option>
        </select>
    </div>

</template>

<script>

    export default {

        props: [ 'section', 'index', 'field'],

        computed: {
            fieldId() {
                return `section-${this.section}-field-${this.index}`
            },
        }

    }

</script>