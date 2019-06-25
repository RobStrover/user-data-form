<template>

    <div class="card">
        <div class="card-header form-section__title">
            <h2 class="mb-0">
                <button class="btn btn-link" type="button">
                    {{ sectionTitle}}
                </button>
            </h2>
        </div>

        <div>
            <div class="card-body">
                {{ sectionFields }}
            </div>
        </div>
    </div>

</template>

<script>

    export default {

        props: ['sectionData'],

        computed: {
            sectionTitle() {
                return this.sectionData.name;
            },
            sectionFields() {
                return this.sectionData.fields;
            }
        }

    }

</script>