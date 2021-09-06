<template>
    <multiselect
        :placeholder="placeholder"
        :selectLabel="selectLabel"
        :hideSelected="true"
        :value="selectedCategory"
        :options="categories"
        :searchable="false"
        @input="updateSelectedCategory"
        >
    </multiselect>
</template>

<script>
import constants from '../../services/constants'
import Multiselect from 'vue-multiselect'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
    name: 'catalog-select',
    data() {
        return {
            placeholder: constants.SELECT.PLACEHOLDER,
            selectLabel: constants.SELECT.SELECT_LABEL
        }
    },
    components: {
        Multiselect
    },
    computed: {
        ...mapState([
            'selectedCategory' 
        ]),
        ...mapGetters({
            categories: 'CATEGORIES',
        })
    },
    methods: {
        ...mapActions({
            updateSelectedCategory: 'UPDATE_SELECTED_CATEGORY',
            getCategoriesFromApi: 'GET_CATEGORIES_FROM_API'
        })
    },
    created() {
        this.getCategoriesFromApi();
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
    .multiselect__tags {
        border: $border;
    }
    .multiselect__option--highlight,
    .multiselect__option--highlight:after {
        background: $light-gray;
        color: $main-font-color;
    }
</style>
