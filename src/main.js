import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/ionicons.min.css';

import 'swiper/css/bundle'; // ✅ Proper Swiper CSS import
// ❌ Removed old Swiper JS/CSS imports

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');
