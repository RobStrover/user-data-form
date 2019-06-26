<template>

    <div class="form-group">
        <label :for="fieldId">{{ field.label }}</label>
        <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
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