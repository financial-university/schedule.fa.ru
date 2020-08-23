<template>
    <div>
        <div class="row">
            <div class="uk-margin">
                <div class="uk-button-group uk-child-width-1-2 uk-width-1-1">
                    <input v-on:click="choiceType('group')" type="radio" id="one" value="group" v-model="type" hidden>
                    <label for="one" class="uk-button uk-button-default" style="border-radius: 50px 0 0 50px;"
                           v-bind:class="{ 'uk-button-primary': type === 'group' }">Студент</label>
                    <input v-on:click="choiceType('lecturer')" type="button" id="two" value="lecturer" v-model="type"
                           hidden>
                    <label for="two" class="uk-button uk-button-default" style="border-radius: 0 50px 50px 0;"
                           v-bind:class="{ 'uk-button-primary': type === 'lecturer' }">Преподаватель</label>
                </div>
            </div>
        </div>

        <transition name="slide-fade">
            <div>
                <div class="row">
                    <div class="search-wrapper panel-heading">
                        <input class="form-control uk-input" type="text" v-model="searchQuery"
                               v-bind:placeholder="getPlaceholder()"/>
                    </div>
                </div>
                <div v-if="searchQuery !== name">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div v-if="computedItems.length">
                                <ul v-for="item in computedItems" v-bind:key="item.id"
                                    v-bind:data-index="item.label"
                                    class="list-complete-item uk-list-striped">
                                    <li class="uk-button uk-button-default uk-width-expand"
                                        v-on:click="choiceItem(item.id, item.label)">
                                        {{ item.label }}
                                    </li>
                                </ul>
                            </div>
                            <div v-else>
                                <button class="uk-input uk-form-danger calendar-link">
                                    Группа не найдена
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="slide-fade">
            <div v-if="computedParams">
                <div v-if="isApple">
                    <a :href="url(true)">
                        <button class="uk-input uk-form-success calendar-link">
                            Подписаться на календарь
                        </button>
                    </a>
                </div>
                <div v-else>
                    <button class="uk-input uk-form-success uk-margin-top calendar-link"
                            v-clipboard:copy="url(false)"
                            v-clipboard:success="onCopy"
                            v-clipboard:error="onError">
                        {{ url(false) }}
                    </button>
                    <p class="link-help">Нажмите для копирования ссылки</p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {getData} from "../api";
    import {protocolHTTP, protocolWEBCAL, url} from "../config";
    import {isIOS, isMobileSafari, isSafari, osName} from 'mobile-device-detect';

    export default {
        name: "calendar-url",
        data: () => ({
            items: [],
            id: null,
            name: null,
            type: null,
            searchQuery: "",
            isApple: isIOS || isMobileSafari || isSafari || osName === "Mac OS"
        }),
        created() {
            this.type = this.$route.query.type;
            this.name = this.$route.query.name;
            this.id = this.$route.query.id;
            this.searchQuery = this.$route.query.name;
            if (this.type !== undefined) {
                getData(this.type + "s").then(response => this.items = response);
            }
            if (this.name !== undefined) {
                this.name = decodeURIComponent((this.name + '').replace(/\+/g, '%20'));
            }
        },
        computed: {
            computedItems() {
                const filterMax = (fn, c) => x => c && fn(x) && c--;
                return this.items.filter(filterMax((item) => {
                        return item.label.trim().toUpperCase().startsWith(this.searchQuery.toUpperCase())
                    }, 10)
                );
            },
            computedParams() {
                return this.id && this.type && this.name
            }
        },
        watch: {
            searchQuery: async function () {
                if (this.name !== this.searchQuery) {
                    this.name = null;
                }
            }
        },
        methods: {
            choiceItem: async function (id, label) {
                this.id = id;
                this.name = label.trim();
                this.searchQuery = this.name;
            },
            choiceType: async function (type) {
                this.type = type;
                this.name = null;
                this.id = null;
                if (this.type === "lecturer" || this.type === "group") {
                    getData(this.type + "s").then(response => this.items = response);
                }
                this.searchQuery = ''
            },
            url(webcal = false) {
                if (webcal) {
                    return protocolWEBCAL + url + '/calendar/' + this.type + '/' + this.id
                }
                return protocolHTTP + url + '/calendar/' + this.type + '/' + this.id
            },
            getPlaceholder() {
                let str;
                switch (this.type) {
                    case "lecturer":
                        str = "Введите ваше ФИО";
                        break;
                    case "group":
                        str = "Введите вашу группу";
                        break;
                    default:
                        str = "Выберите кто вы";
                        break;
                }
                return str;
            },
            onCopy: function () {
                alert('Ссылка скопирована');
            },
            onError: function () {
                alert('Ошибка при копировании ссылки');
            }
        }
    }
</script>

<style scoped>

    .uk-form-success, .uk-form-success:focus {
        color: #007d8c;
        border-color: #007d8c;
    }

    button.uk-input.uk-form-success.calendar-link {
        cursor: pointer;
        background-color: #007d8c;
        color: white;
    }

    .search-wrapper input {
        margin-bottom: 20px;
    }
    .form-control {
        text-align: center;
        border-radius: 50px;
    }

    .calendar-link {
        border-radius: 50px;
    }

    .link-help {
        opacity: 0.7;
        text-align: center;
        margin-top: 5px;
    }
</style>
