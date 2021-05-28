<template>
    <form :class="className" @submit.prevent="onSubmit">
        <label>
            Name: 
            <input placeholder="Product name" v-model="productName" />
        </label>
        <label>
            Description: 
            <textarea placeholder="Product description" v-model="description" />
        </label>
        <label>
            Picture URL:
            <input placeholder="Picture URL" v-model="pictureUrl" />
        </label>
        <BeautifulButton>
            Submit
        </BeautifulButton>
    </form>
</template>

<script>
import BeautifulButton from './BeautifulButton.vue';

export default {
    components: { BeautifulButton },
    name: 'NewProductForm',
    data() {
        return {
            productName: "",
            description: "",
            pictureUrl: "",
            lastSubmittedIndex: 10
        }
    },
    methods: {
        onSubmit() {
            this.$emit('newProduct', {
                name: this.productName,
                description: this.description,
                pictureUrl: this.pictureUrl,
                id: (this.lastSubmittedIndex += 1).toString()
            });
        }
    },
    computed: {
        className() {
            return {
                NewProductForm: true,
                form: false,
                hidden: this.hidden
            }
        }
    },
    props: {
        hidden: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style>
.NewProductForm {
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: flex-start;
}
.NewProductForm > *:not(button) {
    width: 100%;
    text-align: left;
}

.NewProductForm.hidden {
    display: none;
}
</style>