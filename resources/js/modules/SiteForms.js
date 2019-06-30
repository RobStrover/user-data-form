

function initSiteForms() {

    const siteForms = document.getElementsByClassName('site-form__container');
    if (!siteForms.length) return;

    for (let i = 0; i < siteForms.length; i++) {
        const siteFormElement = siteForms[i];
        initSiteForm(siteFormElement);
    };

}

function initSiteForm(siteFormElement) {

    Vue.component('siteform', require('../components/SiteForm/SiteForm').default);

    const formEndpoint = siteFormElement.getAttribute('data-form-endpoint');

    const siteFormData = {
        namespaced: true,
        state: {
            submitting: true,
            isValid: true,
            successMessage: "",
            failureMessage: "",
            activeSection: 0,
            formSections: JSON.parse(siteFormElement.getAttribute('data-form-sections')),
            fieldValidationMessages: [],
            formUrl: formEndpoint,
        },
        getters: {
            numberOfFormSections(state) {
                return state.formSections.length;
            },
            formPostArray(state) {
                let formData = {};

                for (let i = 0; i < state.formSections.length; i++) {
                    let formSectionFields = state.formSections[i]['fields'];

                    for (let i = 0; i < formSectionFields.length; i++) {
                        const formSectionField = formSectionFields[i];
                        formData[formSectionField.name] = formSectionField.value || null
                    }
                }

                return formData
            }
        },
        mutations: {
            storeFieldValue(state, { sectionId, fieldName, fieldValue }) {

                let formItem = state.formSections[sectionId]['fields']
                    .find(field => field.name == fieldName);

                if (formItem)
                    Vue.set(formItem, 'value', fieldValue);
            },
            storeFieldValidationMessage(state, { fieldName, fieldValidationMessage }) {
                state.fieldValidationMessages.push({ fieldName, fieldValidationMessage })
            },
            storeClearValidationMessages(state) {
                state.fieldValidationMessages = [];
            },
            storeSubmitting(state, status) {
                state.submitting = status
            },
            storeFailureMessage(state, message) {
                state.failureMessage = message;
            },
            storeSuccessMessage(state, message) {
                state.successMessage = message;
            },
            storeIncrementSection(state) {
                state.activeSection++;
            },
            storeDecrementSection(state) {
                state.activeSection--;
            },
            storeActiveSection(state, index) {
                state.activeSection = index;
            }
        },
        actions: {
            updateFieldValue(context, inputData) {
                context.commit('storeFieldValue', inputData);
            },
            updateValidators(context, inputData) {

            },
            clearValidationMessages(context) {
                context.commit('storeClearValidationMessages')
            },
            submitForm(context) {
                if (context.state.isValid) {
                    context.dispatch('postForm');
                }
            },
            updateValidationMessages(context, validationMessages) {
                for (let i = 0; i < Object.keys(validationMessages).length; i++) {
                    let fieldName = Object.keys(validationMessages)[i];
                    let fieldValidationMessages = validationMessages[fieldName];

                    for (let i = 0; i < fieldValidationMessages.length; i++) {
                        context.commit('storeFieldValidationMessage', { fieldName, fieldValidationMessage: fieldValidationMessages[i] })
                    }

                }
            },
            navigateToSection(context, index) {
                context.commit('storeActiveSection', index);
            },
            bumpSection(context, direction ) {
                if (direction == 'next') {
                    context.commit('storeIncrementSection');
                } else {
                    context.commit('storeDecrementSection');
                }
            },
            postForm(context) {
                console.log('here');
                context.commit('storeSubmitting', true);

                window.axios.post(context.state.formUrl, context.getters['formPostArray'])
                    .then( (response) => {
                        context.commit('storeSuccessMessage', response.data.message);
                        context.commit('storeSubmitting', false);
                    })
                    .catch ( (error) => {
                        if (error.response.status === 400) {
                            context.dispatch('updateValidationMessages', error.response.data.errors);
                            context.commit('storeFailureMessage', error.response.data.message)
                        } else {
                            context.commit('storeFailureMessage', 'Whoops! Something went wrong, please try again later.');
                        }

                        context.commit('storeSubmitting', false);
                    });



            }
        }
    };

    const siteFormStore = new Vuex.Store({
        modules: {
            siteFormData: siteFormData
        }
    });

    const siteFormApp = new Vue({
        el: siteFormElement,
        store: siteFormStore
    });


}

module.exports = {
    initSiteForms,
    initSiteForm
};