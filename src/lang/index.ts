// tslint:disable
import Vue from 'vue';
import VueI18n,  { LocaleMessages } from 'vue-i18n';

import merge from 'lodash/merge';
import { AppModule } from '@/store/modules/app';

import zh from './zh-CN.json';
import es from './es-DO.json';
import dependenciesZhCN from './dependencies/dependencies-zh-CN.json';
import dependenciesEsDO from './dependencies/dependencies-es-DO.json';

Vue.use(VueI18n);

const messages: LocaleMessages = {
  'zh': merge(zh, dependenciesZhCN),
  'es': merge(es, dependenciesEsDO)
};

const i18n = new VueI18n({
  locale: AppModule.configs.lang || 'es',
  messages
});

export default i18n;
