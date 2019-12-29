<template>
    <div class="container">
        <div class="uk-width-auto">
            <div class="item">
                <h1 class="uk-heading-small">
                    Бот расписания
                </h1>
            </div>
            <div class="item">
                <a href="https://vk.me/finschedule" class="block">
                    <svg class="vk" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 192 192">
                        <g fill="none" fill-rule="evenodd">
                            <path class="vk-1"
                                  d="M66.56,0 C120.32,0 71.68,0 125.44,0 C179.2,0 192,12.8 192,66.56 C192,120.32 192,71.68 192,125.44 C192,179.2 179.2,192 125.44,192 C71.68,192 120.32,192 66.56,192 C12.8,192 0,179.2 0,125.44 C0,71.68 0,96.580329 0,66.56 C0,12.8 12.8,0 66.56,0 Z"/>
                            <path class="vk-2"
                                  d="M157.233993,66.1462211 C158.123557,63.1797719 157.233994,61 153.000244,61 L139.000244,61 C135.440505,61 133.799415,62.8830035 132.909356,64.9593945 C132.909356,64.9593945 125.789878,82.3129373 115.704198,93.5851974 C112.441227,96.8481681 110.957879,97.8863636 109.178009,97.8863636 C108.288198,97.8863636 107,96.8481681 107,93.8819658 L107,66.1462211 C107,62.586482 105.96694,61 103.000244,61 L81.0002441,61 C78.7757158,61 77.4378669,62.6521562 77.4378669,64.2179674 C77.4378669,67.5925348 82.4804603,68.3707494 83.0002441,77.8633869 L83.0002441,98.4799003 C83.0002441,103 82.1839388,103.819509 80.4040693,103.819509 C75.6579974,103.819509 64.1131647,86.388441 57.2660122,66.4427426 C55.9241353,62.5659897 54.5782535,61 51.0002441,61 L37.0002441,61 C33.0002441,61 32.2001953,62.8830035 32.2001953,64.9593945 C32.2001953,68.6675178 36.9465141,87.059256 54.2998099,111.383646 C65.8685915,127.995268 82.1682449,137 97.0002441,137 C105.899345,137 107.000244,135 107.000244,131.555007 L107.000244,119 C107.000244,115 107.843292,114.201711 110.661357,114.201711 C112.737749,114.201711 116.297488,115.239906 124.603545,123.249196 C134.095936,132.741586 135.660882,137 141.000244,137 L155.000244,137 C159.000244,137 161.000244,135 159.846475,131.053112 C158.583906,127.119411 154.051802,121.412135 148.038124,114.646617 C144.774906,110.790356 139.88045,106.637574 138.397102,104.560689 C136.320711,101.891255 136.914001,100.704429 138.397102,98.3315162 C138.397102,98.3315162 155.454123,74.3036478 157.233993,66.1462211 Z"/>
                        </g>
                    </svg>
                    <span class="uk-h2 uk-margin-small-left">ВКонтакте</span>
                </a>
            </div>
            <div class="item">
                <a href="tg://resolve?domain=FinancialUniversityBot" class="block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 240 240">
                        <defs>
                            <linearGradient id="a" x1=".667" x2=".417" y1=".167" y2=".75">
                                <stop offset="0" stop-color="#37aee2"/>
                                <stop offset="1" stop-color="#1e96c8"/>
                            </linearGradient>
                            <linearGradient id="b" x1=".66" x2=".851" y1=".437" y2=".802">
                                <stop offset="0" stop-color="#eff7fc"/>
                                <stop offset="1" stop-color="#fff"/>
                            </linearGradient>
                        </defs>
                        <circle cx="120" cy="120" r="120" fill="url(#a)"/>
                        <path fill="#c8daea" d="M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80"/>
                        <path fill="#a9c9dd" d="M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035"/>
                        <path fill="url(#b)"
                              d="M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258"/>
                    </svg>
                    <span class="uk-h2 uk-margin-small-left">Telegram</span>
                </a>
            </div>
            <div class="item">
                <router-link v-bind:to="'/calendar'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 240 240">
                        <defs>
                            <linearGradient id="a" x1=".667" x2=".417" y1=".167" y2=".75">
                                <stop offset="0" stop-color="#37aee2"/>
                                <stop offset="1" stop-color="#1e96c8"/>
                            </linearGradient>
                            <linearGradient id="b" x1=".66" x2=".851" y1=".437" y2=".802">
                                <stop offset="0" stop-color="#eff7fc"/>
                                <stop offset="1" stop-color="#fff"/>
                            </linearGradient>
                        </defs>
                        <circle cx="120" cy="120" r="120" fill="url(#a)"/>
                        <path fill="#c8daea" d="M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80"/>
                        <path fill="#a9c9dd" d="M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035"/>
                        <path fill="url(#b)"
                              d="M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258"/>
                    </svg>
                    <span class="uk-h2 uk-margin-small-left">Календарь</span>
                </router-link>
            </div>
        </div>
        <div class="uk-width-auto iphones uk-visible@s">
            <div class="item">
                <div class="a">
                    <div class="">
                        <img class="iphone" src="/phone.png" alt="iPhone">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home'
    }
</script>

<style scoped>
    .vk {
        color: #4984AD;
    }

    .item h3 svg {
        margin-right: 8px;
    }

    .vk-1 {
        fill: #5181B8;
    }

    .vk-2 {
        fill: white;
    }

    .iphone {
        max-height: 700px;
    }

    @keyframes fade {
        0% {
            opacity: 0;
        }
        11.11% {
            opacity: 1;
        }
        33.33% {
            opacity: 1;
        }
        44.44% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    :root {
        color-scheme: light dark;
    }

    .container {
        height: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .item {
        padding: 10px;
        margin: 10px;
        font-size: 2em;
    }


    .iphone {
        max-height: 700px;
    }


    .fadein {
        position: relative;
        top: 0;
        left: 0;
    }

    .fadein img {
        opacity: 0;
        animation-name: fade;
        animation-duration: 3s;
        animation-iteration-count: infinite;
    }

    .fadein img:nth-child(1) {
        animation-delay: 0s;
    }

    .fadein img:nth-child(2) {
        animation-delay: 3s;
    }

    @media (prefers-color-scheme: dark) {
        .item h1 {
            color: white;
        }

        .item h2 {
            color: white;
        }

        .item h3 {
            color: white;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        .iphones {
            display: none;
        }
    }


</style>
