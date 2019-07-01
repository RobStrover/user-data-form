<template>

    <div class="card form-section">
        <div class="card-header form-section__title">
            <h2 class="mb-0">
                <button @click="navigateToThisSection" class="btn btn-link" type="button">
                    {{ `Step ${index + 1}: ${sectionTitle}`}}
                </button>
            </h2>
        </div>

        <div :class="sectionActiveClass">
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
                                <PreviousSectionButton v-if="previousSection"/>
                                <NextSectionButton  v-if="nextSection"/>
                                <FormSubmitButton v-if="!nextSection"/>
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

    import NextSectionButton from './Buttons/NextSectionButton';
    import PreviousSectionButton from './Buttons/PreviousSectionButton';
    import FormSubmitButton from './Buttons/FormSubmitButton';

    export default {

        props: [ 'index', 'sectionData'],

        components: {
            Field_text, Field_date, Field_email, Field_enum, Field_tel, Field_textarea,
            NextSectionButton, PreviousSectionButton, FormSubmitButton
        },

        methods: {
            getFormComponentName(fieldType) {
                return `Field_${fieldType}`;
            },
            navigateToThisSection() {
                this.$store.dispatch('siteFormData/navigateToSection', this.index);
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
            sectionActiveClass() {
                if (this.$store.state.siteFormData.activeSection == this.index)
                    return `form-section-content open`;
                return 'form-section-content closed'
            },
            previousSection() {
                if (this.index !== 0) return 1;
                return false;
            }
        }

    }

</script>

<style lang="scss">

    .card {
        border: none;
    }

    .form-section {
        margin-bottom: 5px;

        .card-header {
            z-index: 1;
            border-radius: 10px !important;
            border: none;
            padding: 10px 0px;
            h2 {
                button {
                    color: white;
                }
            }

        }

        .form-section-content {
            background-color: #dedede;
            border-radius: 0 0 10px 10px;
            &.open {
                margin-top: -5px;
                height: auto;
            }
            &.closed {
                height: 0;
            }
            .card-body {
                padding: 15px 10px 10px 10px
            }
        }
    }

</style>