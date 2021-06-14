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

<script lang='ts'>
import Vue from 'vue';
import BeautifulButton from './BeautifulButton.vue';

interface INewProductFormData {
    productName: string;
    description: string;
    pictureUrl: string;
    lastSubmittedIndex: number;
}

export default Vue.extend({
    components: { BeautifulButton },
    name: 'NewProductForm',
    data(): INewProductFormData {
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
        isValid(): true {
            console.log(this.productName)
            return true;
        },
        
        className(): Record<string,boolean> {
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
});
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