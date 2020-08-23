<template>
  <div>
    <ul uk-tab="swiping: false" id="uk-tab">
      <li><a href="#">Android</a></li>
      <li><a href="#">Apple</a></li>
      <li><a href="#">Windows</a></li>
    </ul>
    <ul class="uk-switcher uk-margin instruction-block">
      <li>
        <div uk-slider="finite: true; center: true">
          <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
            <ul class="uk-slider-items instruction-slider uk-grid">
              <li>
                <div class="uk-card uk-card-default">
                  <div class="uk-card-media-top instruction-slider-image">
                    <img src="/images/shot_android_0.png" alt="" class="uk-width-large@m">
                  </div>
                  <div class="uk-card-body">
                    <p>Календарь на Android добавляется через Google</p>
                    <p>Листай вправо чтобы узнать как</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="uk-card uk-card-default">
                  <div class="uk-card-media-top instruction-slider-image">
                    <img src="/images/shot_android_1.png" alt="" class="uk-width-large@m">
                  </div>
                  <div class="uk-card-body">
                    <p>Выберите свою группу, скопируйте ссылку и вставтьте
                      <a href="https://calendar.google.com/calendar/r/settings/addbyurl"
                         style="color: #009688;">на сайте
                        Google календаря</a></p>
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
      <li>
        <div uk-slider="finite: true; center: true">
          <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
            <ul class="uk-slider-items instruction-slider uk-grid">
              <li>
                <div class="uk-card uk-card-default">
                  <div class="uk-card-media-top instruction-slider-image">
                    <img src="/images/shot_windows_0.png" alt="" class="uk-width-large@m">
                  </div>
                  <div class="uk-card-body">
                    <p>Календарь на Windows добавляется через Outlook</p>
                    <p>Листай вправо чтобы узнать как</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="uk-card uk-card-default">
                  <div class="uk-card-media-top instruction-slider-image">
                    <img src="/images/shot_windows_1.png" alt="" class="uk-width-large@m">
                  </div>
                  <div class="uk-card-body">
                    <p>Выберите свою группу, скопируйте ссылку и вставтьте
                      <a href="https://outlook.office.com/calendar/addcalendar"
                         style="color: #009688;">на сайте
                        Outlook календаря</a></p>
                    <p>Выберите <b>Подписаться с веб-страницы</b></p>
                  </div>
                </div>
              </li>
              <li>
                <div class="uk-card uk-card-default">
                  <div class="uk-card-media-top instruction-slider-image">
                    <img src="/images/shot_windows_2.png" alt="" class="uk-width-large@m">
                  </div>
                  <div class="uk-card-body">
                    <p>Зайдите в календарь на Windows с тем же Outlook аккаунтом</p>
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
    </ul>
  </div>
</template>

<script>
/* global UIkit */
import {isIOS, isMobileSafari, isSafari, osName} from 'mobile-device-detect';

export default {
  name: "calendar-guide",
  data: () => ({
    platform: isIOS || isMobileSafari || isSafari || osName === "Mac OS" ? "apple" : osName === "Windows" ? "windows" : "android"
  }),
  mounted() {
    let tabs = UIkit.tab(document.getElementById("uk-tab"));
    switch (this.platform) {
      case "apple": {
        tabs.show(1)
        break
      }
      case "windows":
        tabs.show(2)
        break
    }
  }
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