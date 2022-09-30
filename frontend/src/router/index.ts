import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/login/LoginIndex.vue";
import AccountView from "../views/account/AccountIndex.vue";
import MailerView from "../views/mailer/MailerIndex.vue";
import UploaderView from "../views/uploader/UploaderIndex.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LoginView,
    },
    {
      path: "/account",
      component: AccountView,
    },
    {
      path: "/mailer",
      component: MailerView,
    },
    {
      path: "/uploader",
      component: UploaderView,
    },
  ],
});

export default router;
