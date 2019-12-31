<template>
    <div>
        <main class="uk-container">
            <section class="uk-margin-top uk-flex uk-flex-center uk-flex-left@m uk-flex-wrap uk-flex-wrap-around">
                <article class="uk-margin-bottom">
                    <h1 class="uk-margin-small-bottom">
                        Календарь
                    </h1>
                    <ul class="uk-subnav">
                        <li><a href="https://ruz.fa.ru">Расписание</a></li>
                        <li><a href="https://bot.fa.ru">Бот расписания</a></li>
                    </ul>
                </article>
            </section>
            <section class="uk-margin-top uk-flex uk-flex-center uk-flex-left@m uk-flex-wrap uk-flex-wrap-around">
                <article class="uk-margin-bottom uk-width-1-1 uk-width-large@s">
                    <CalendarUrl/>
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

    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50vh, 1fr));
        grid-gap: 30px;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
