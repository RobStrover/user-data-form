

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

    const formEndpoint = siteFormElement.getAttribute('data-form-endpoint')
    console.log(formEndpoint, siteFormElement.getAttribute('data-form-sections'));

    const siteFormData = {
        namespaced: true,
        state: {
            submitting: false,
            isValid: false,
            openSection: 0,
            formSections: JSON.parse(siteFormElement.getAttribute('data-form-sections')),
            formUrl: 'http://localhost:8000/submit',
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
                        formData[name] = formSectionField.value || null
                    }
                };

                return formData
            }
        },
        mutations: {
            storeFieldValue(state, { sectionId, fieldName, fieldValue }) {
                state.formSections[sectionId]['fields']
                    .find(field => field.name == fieldName)
                    .value = fieldValue
            },
            storeSubmitting(state, status) {
                state.submitting = status
            }
        },
        actions: {
            updateFieldValue(context, inputData) {
                context.commit('storeFieldValue', inputData);
            },
            updateValidators(context, inputData) {

            },
            submitForm(context) {
                // if (context.state.isValid) {
                    context.dispatch('postForm');
                // }
            },
            postForm(context) {

                console.log(context.getters)
                context.commit('storeSubmitting', true);

                window.axios.post(context.state.formEndpoint, context.getters['formPostArray'])
                    .then( (response) => {
                        context.commit('storeSubmitting', false);
                    })
                    .catch ( (error) => {
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