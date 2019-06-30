<template>

    <div class="invalid-feedback">
        <ul v-if="errors.length > 1">
            <li v-for="(error, index) in errors" :key="index">
                {{ error.fieldValidationMessage }}
            </li>
        </ul>
        <span v-if="errors.length == 1">{{ errors[0].fieldValidationMessage }}</span>
    </div>

</template>

<script>

    export default {

        props: [ 'fieldName', 'errors' ],

    }

</script>