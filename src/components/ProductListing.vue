<template>
    <div class="ProductListing" @click='navigateToProduct'>
        <img :src="pictureUrl" />
        {{name}}
    </div>
</template>

<script>

export default {
    name: 'ProductListing',
    props: {
        name: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        pictureUrl: {
            type: String,
            required: true
        }
    },
    methods: {
        navigateToProduct() {
            this.$router.push({ path: `store/${this.id}` })
        }
    }
}
</script>

<style>
.ProductListing:not(:last-child) {
    border-bottom: 2px solid grey;
}

.ProductListing {
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.ProductListing > img {
    max-height: 100px;
}
</style>