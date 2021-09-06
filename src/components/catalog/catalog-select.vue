<template>
    <multiselect
        placeholder="Select category"
        selectLabel="Select"
        :hideSelected="true"
        :value="selectedCategory"
        :options="categories"
        :searchable="false"
        @input="updateSelectedCategory"
        >
    </multiselect>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { mapActions, mapState } from 'vuex'

export default {
    name: 'catalog-select',
    components: {
        Multiselect
    },
    computed: {
        ...mapState([
            'categories',
            'selectedCategory' 
        ])
    },
    methods: {
        ...mapActions({
            updateSelectedCategory: 'UPDATE_SELECTED_CATEGORY'
        })
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">

</style>