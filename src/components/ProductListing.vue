<template>
    <div class="ProductListing" @click='navigateToProduct'>
        <div class="ProductImage">
            <img :src="pictureUrl" />
        </div>
        <div class="ProductName">
            {{name}}
        </div>
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
            this.$router.push({ name: 'product', params: { productId: this.id }})
        }
    }
}
</script>

<style>
.ProductListing {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 200px;
    border-radius: 5px;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
}

.ProductListing:hover {
        box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
}

.ProductImage {
    max-width: 200px;
    height: 350px;
    display: flex;
    background-color: rgb(237, 248, 255);
}
.ProductImage > img {
    width: 100%;
    margin: auto;
}

.ProductName {
    font-size: 20px;
}
</style>