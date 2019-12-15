<template id="app">
    <div data-view="app">
        <transition
                name="fade"
                mode="out-in"
        >
            <router-view>
            </router-view>
        </transition>
    </div>
</template>


<script>
    export default {
        name: 'app'
    }
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.2s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

    * {
        margin: 0;
        padding: 0;
        border: 0;
    }

    html, body {
        height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
    }

    body {
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    .container {
        height: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .row {
        width: auto;
    }

    .item {
        padding: 10px;
        margin: 10px;
        font-size: 2em;
    }

</style>
