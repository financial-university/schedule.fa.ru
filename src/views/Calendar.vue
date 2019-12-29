<template>
    <div class="uk-container">
        <main>
            <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                <div class="uk-navbar-left">

                    <ul class="uk-navbar-nav">
                        <li class="">
                            <router-link v-bind:to="'/'">
                                <a>👈</a>
                            </router-link>
                        </li>
                    </ul>
                    <a href="" class="uk-navbar-item uk-logo">Календарь</a>
                </div>
            </nav>
<!--            <header>-->
<!--                <h1>Календарь</h1>-->
<!--            </header>-->
            <section class="uk-margin-top uk-child-width-1-2@m uk-grid">
                <article>
                    <CalendarUrl/>
                </article>
                <article>
                    <Instructions/>
                </article>
            </section>
        </main>
    </div>
</template>

<script>

    import CalendarUrl from "../components/CalendarURL";
    import Instructions from "../components/Instructions";

    export default {
        name: 'calendar',
        components: {
            CalendarUrl, Instructions
        }
    }

</script>


<style scoped>

    /* General styles -------------------------------------------------*/
    header {
        padding: 20px 10px;
    }

    h1 {
        font-size: 6vh;
    }

    header a {
        font-size: 2.3vh;
    }

    /* Grid styles -------------------------------------------------*/
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50vh, 1fr));
        grid-gap: 30px;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
