

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

    const siteFormData = {
        namespaced: true,
        state: {
            submitting: false,
            isValid: false,
            openSection: 0,
            formSections: JSON.parse(siteFormElement.getAttribute('data-form-sections')),
            formEndpoint: JSON.parse(siteFormElement.getAttribute('data-form-endpoint')),
        },
        getters: {
            numberOfFormSections(state) {
                return state.formSections.length;
            },
            formPostArray(state) {

            }
        },
        mutations: {
            storeFieldValue(state, { sectionId, fieldName, newValue }) {
                state.formSections[sectionId][fieldName] = newValue
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
                context.commit('storeSubmitting', true);

                window.axios.post('/admin/uploads/new', context.getters[''])
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
    })

    const siteFormApp = new Vue({
        el: siteFormElement,
        store: siteFormStore
    });


}

module.exports = {
    initSiteForms,
    initSiteForm
}