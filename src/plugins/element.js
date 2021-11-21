import Vue from 'vue';
import {
  Avatar, Button, Card, Divider, Input,
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/pt-br';
import locale from 'element-ui/lib/locale';

import '../styles/element.scss';

locale.use(lang);

Vue.use(Avatar);
Vue.use(Button);
Vue.use(Card);
Vue.use(Divider);
Vue.use(Input);
