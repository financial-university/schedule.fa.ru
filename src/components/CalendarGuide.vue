<template>
    <div>
        <ul uk-tab="swiping: false">
            <li><a href="#">Android</a></li>
            <li><a href="#">Apple</a></li>
        </ul>
        <ul class="uk-switcher uk-margin instruction-block">
            <li>
                <!--                <p>Для Android подписка работает через <b>Google календарь</b></p>-->
                <!--                <p class="uk-margin-small-bottom">-->
                <!--                    Выберите свою группу, скопируйте ссылку и вставтьте-->
                <!--                    <a href="https://calendar.google.com/calendar/r/settings/addbyurl">на сайте google календаря</a>-->
                <!--                </p>-->
                <!--                <p class="uk-margin-small-bottom">-->
                <!--                    Зайдите в приложение Google календарь на телефоне и проделайте действия-->
                <!--                </p>-->
                <!--                <ul class="uk-list uk-list-bullet">-->
                <!--                    <li>-->
                <!--                        Настройки-->
                <!--                    </li>-->
                <!--                    <li>-->
                <!--                        Расписание Университета (может быть-->
                <!--                        скрыто под Ещё)-->
                <!--                    </li>-->
                <!--                    <li>-->
                <!--                        Включить синхронизацию-->
                <!--                    </li>-->
                <!--                </ul>-->
                <div uk-slider="finite: true; center: true">

                    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

                        <ul class="uk-slider-items instruction-slider uk-grid">
                            <li>
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top instruction-slider-image">
                                        <img src="/images/shot_android_1.png" alt="" class="uk-width-large@m">
                                    </div>
                                    <div class="uk-card-body">
                                        <p>Выберите свою группу, скопируйте ссылку и вставтьте
                                            <a href="https://calendar.google.com/calendar/r/settings/addbyurl"
                                               style="color: #009688;">на сайте
                                                google календаря</a></p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top instruction-slider-image">
                                        <img src="/images/shot_android_2.png" alt="" class="uk-width-large@m">
                                    </div>
                                    <div class="uk-card-body">
                                        <p>Зайдите в приложение Google календарь на телефоне в пункт настройки</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top instruction-slider-image">
                                        <img src="/images/shot_android_3.png" alt="" class="uk-width-large@m">
                                    </div>
                                    <div class="uk-card-body">
                                        <p>Нажмите Ещё</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top instruction-slider-image">
                                        <img src="/images/shot_android_4.png" alt="" class="uk-width-large@m">
                                    </div>
                                    <div class="uk-card-body">
                                        <p>Найдите пункт Расписание Университета</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top instruction-slider-image">
                                        <img src="/images/shot_android_5.png" alt="" class="uk-width-large@m">
                                    </div>
                                    <div class="uk-card-body">
                                        <p>Включите синхронизацию</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <a class="uk-position-center-left uk-position-small uk-hidden-hover slider-arrow" href="#"
                           uk-slidenav-previous uk-slider-item="previous"></a>
                        <a class="uk-position-center-right uk-position-small uk-hidden-hover slider-arrow" href="#"
                           uk-slidenav-next
                           uk-slider-item="next"></a>

                    </div>

                    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

                </div>
            </li>
            <li>
                <p>Выберите свою группу и нажмите на ссылку</p>
                <p>Следуйте инструкции предложенной устройством</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "calendar-guide"
    }
</script>

<style scoped>
    .instruction-block {
        line-height: 1.3;
    }

    .instruction-slider > * {
        width: 75%;
    }

    .instruction-slider-image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slider-arrow, .slider-arrow:active, .slider-arrow:hover {
        color: #007d8c;
    }
</style>