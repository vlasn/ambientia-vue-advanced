<template>
    <button class="BeautifulButton" @click="$emit('click')">
        <slot name="default">
            Fill me!
            <slot name="suffix"/>
        </slot>
    </button>
</template>

<script>
export default {
    name: "BeautifulButton"
}
</script>

<style scoped>
.BeautifulButton {
    background: none;
    border: 2px solid tomato;
    border-radius: 3px;
    padding: 2px 5px;
    color: tomato;
}

</style>
