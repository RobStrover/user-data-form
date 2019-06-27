

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
            openSection: 0,
            formSections: JSON.parse(siteFormElement.getAttribute('data-form'))
        },
        getters: {
            numberOfFormSections(state) {
                return state.formSections.length;
            }
        },
        actions: {
            submitForm() {

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