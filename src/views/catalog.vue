<template>
    <main class="catalog">
        <h1 class="catalog__title">{{ catalogTitleText }}</h1>
        <div>
            <div v-if="isLoadingProducts">
                <catalog-skeleton />
            </div>
            <div v-else-if="isErrorLoadingProducts">
                <catalog-error />
            </div>
            <section v-else>
                <div class="catalog-select">
                    <catalog-select />
                </div>
                <transition-group tag="ul" class="catalog__list" name="list">
                    <catalog-item 
                        v-for="product in visibleProducts"
                        :key="product.id"
                        :product_data="product"
                        />
                </transition-group>
                <button
                    class="catalog__load-btn btn"
                    @click="loadMore"
                    v-show="visibleBtnLoad"
                    >
                    {{ btnLoadText }}
                </button>
            </section>
        </div>
    </main>
</template>

<script>
import constants from '../services/constants';
import CatalogItem from '../components/catalog/catalog-item.vue';
import CatalogSelect from '../components/catalog/catalog-select.vue';
import CatalogSkeleton from '../components/catalog/catalog-skeleton.vue';
import CatalogError from '../components/catalog/catalog-error.vue';
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
    name: "catalog",
    components: {
        CatalogItem,
        CatalogSelect,
        CatalogSkeleton,
        CatalogError
    },
    data() {
        return {
            catalogTitleText: constants.CATALOG.TITLE_TEXT,
            limitToShow: constants.CATALOG.LIMIT_TO_SHOW, 
            stepToShow: constants.CATALOG.STEP_TO_SHOW,
            btnLoadText: constants.CATALOG.BTN_LOAD_TEXT
        }
    },
    computed: {
        ...mapState([
            'selectedCategory'
        ]),
        ...mapGetters({
            products: 'PRODUCTS',
            isLoadingProducts: 'IS_LOADING_PRODUCTS',
            isErrorLoadingProducts: 'IS_ERROR_LOADING_PRODUCTS'
        }),
        sortedProducts() {
            return this.products.filter(product => !product.category.indexOf(this.selectedCategory));
        },
        filteredProducts() {
            return this.sortedProducts.length ? this.sortedProducts : this.products;
        },
        visibleProducts() {
            return this.filteredProducts.slice(0, this.limitToShow) 
        },
        visibleBtnLoad() {
            return this.limitToShow < this.filteredProducts.length;
        }
    },
    methods: {
        ...mapActions({
            getProductsFromApi: 'GET_PRODUCTS_FROM_API'
        }),
        loadMore() {
            return this.limitToShow += this.stepToShow;
        }
    },
    created() {
        this.getProductsFromApi();
    },
    watch: {
        'sortedProducts': {
            handler() {
                this.limitToShow = constants.CATALOG.LIMIT_TO_SHOW;
            } 
        }
    }
}
</script>

<style lang="scss">
    .catalog {
        &__title {
            margin: 0 0 $margin*2;
        }
        .catalog-select{
            max-width: 260px;
            margin: 0 auto $margin*6;
        }
        &__list {
            display: grid;
            grid-template-columns: repeat(auto-fill, 242px);
            gap: 36px 18px;
            justify-content: center;
            margin-bottom: $margin*2;
        }
        &__load-btn {
                background-color: $main-font-color;
                color: $main-bg-color;
            &:hover {
                background-color: $yellow;
                color: $main-font-color;
            }
        }
    }
    .list {
        position: relative;
        backface-visibility: hidden;
        z-index: 1;
        &-move {
            transition: all .6s ease-in-out .05s;
        }
        &-enter-active {
            transition: all .4s ease-out;
        }
        &-leave-active {
            transition: all .2s ease-in;
            position: absolute;
            z-index: 0;
        }
        &-enter,
        &-leave-to {
            opacity: 0;
        }
        &-enter {
            transform: scale(0.9);
        }
    }
</style>
