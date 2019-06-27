<template>

    <div class="card form-section">
        <div class="card-header form-section__title">
            <h2 class="mb-0">
                <button class="btn btn-link" type="button">
                    {{ sectionTitle}}
                </button>
            </h2>
        </div>

        <div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-8">
                        <div class="row">
                            <div :class="[sectionFields.length > 1 ? 'col-md-6': 'col-md-12']" v-for="(field, index) in sectionFields" :key="index">
                                <component :field="field" :section="sectionIndex" :index="index" :is="getFormComponentName(field.type)"></component>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="row form-section__button-row align-items-end">
                            <div class="col">
                                <button class="btn btn-primary btn-block" v-if="previousSection" :target="previousSection">Previous</button>
                                <button class="btn btn-primary btn-block" v-if="nextSection" :target="nextSection">Next</button>
                                <button class="btn btn-success btn-block" v-if="!nextSection" @click="submitForm()">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import { mapGetters } from 'vuex'

    import Field_text from './FormFields/TextField'
    import Field_date from './FormFields/DateField'
    import Field_email from './FormFields/EmailField'
    import Field_enum from './FormFields/EnumField'
    import Field_tel from './FormFields/TelephoneField'
    import Field_textarea from './FormFields/TextareaField'

    export default {

        props: [ 'index', 'sectionData'],

        components: { Field_text, Field_date, Field_email, Field_enum, Field_tel, Field_textarea },

        methods: {
            getFormComponentName(fieldType) {
                return `Field_${fieldType}`;
            },
            submitForm() {
                console.log('submitting');
                this.$store.dispatch('siteFormData/submitForm')
            }
        },

        computed: {
            ...mapGetters("siteFormData", [
                'numberOfFormSections'
            ]),
            sectionIndex() {
                return this.index
            },
            sectionTitle() {
                return this.sectionData.name;
            },
            sectionFields() {
                return this.sectionData.fields;
            },
            nextSection() {
                if (this.index + 1 === this.numberOfFormSections) return;
                return this.index + 1;
            },
            previousSection() {
                if (this.index !== 0) return 1;
                return false;
            }
        }

    }

</script>