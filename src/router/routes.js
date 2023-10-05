
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'users', component: () => import('pages/Users/UsersPage.vue') },
      { path: 'mail', component: () => import('pages/Mail/MailPage.vue') },
      { path: 'settings', component: () => import('pages/Settings/SettingsPage.vue') },
      { path: 'mail/register', component: () => import('pages/Mail/MailRegister.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
