<template>
    <div>
        <h2>About</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In repellat dignissimos numquam quae obcaecati, odit
            velit pariatur veritatis nulla quidem minus cum tempore facilis deleniti fugit ad nisi nihil! Expedita.</p>
        <b>{{ data }}</b>
    </div>
</template>
<script setup >
// const { data } = await useFetch('/api/about')
const { data } = await useFetch('/api/currency/GBP')
</script>
<style lang="scss" scoped></style>