<template>
    <div>
        <nav class="uk-navbar-container" uk-navbar>
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li class="uk-active">
                        <a href="">s</a>
                    </li>
<!--                    <li class="uk-parent">-->
<!--                        <a href="">s</a>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <a href=""/>-->
<!--                    </li>-->
                </ul>
            </div>
        </nav>
        <main class="uk-container">
            <section class="uk-margin-top uk-flex uk-flex-center uk-flex-wrap uk-flex-wrap-around">
                <article class="uk-margin-bottom">
                    <CalendarUrl class="link-generator"/>
                </article>
                <article class="uk-margin-left uk-width-auto@s uk-width-1-2@m">
                    <CalendarGuide/>
                </article>
            </section>
        </main>
    </div>
</template>

<script>

    import CalendarUrl from "../components/CalendarURL";
    import CalendarGuide from "../components/CalendarGuide";

    export default {
        name: 'calendar',
        components: {
            CalendarUrl, CalendarGuide
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
        font-weight: 700;
    }

    header a {
        font-size: 2.3vh;
    }

    .uk-navbar-container {
        background: #007d8c;
    }

    /* Grid styles -------------------------------------------------*/
    .link-generator {
        width: auto;
        max-width: 400px;
    }
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50vh, 1fr));
        grid-gap: 30px;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
