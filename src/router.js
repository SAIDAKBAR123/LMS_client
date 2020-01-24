/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () =>
                import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'home',
                    component: () =>
                        import('./views/Home.vue'),
                        meta: {
                            breadcrumb: [
                                { title: 'Home', url: '/books' },
                                { title: 'book item', active: true },
                            ],
                            rule: 'editor'
                        }
                },
                {
                    path: '/books',
                    name: 'books',
                    component: () =>
                        import('./views/Books.vue')
                },
                {
                    path: '/book/create-book',
                    name: 'create_book',
                    component: () => import('./views/book/Create.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Books', url: '/books' },
                            { title: 'Books' },
                            { title: 'Books some', url: '/settings' },
                            { title: 'book item', active: true },
                        ],
                        parent: 'books',
                        rule: 'editor'
                    }
                },

                {
                    path: '/users',
                    name: 'Users',
                    component: () =>
                        import('./views/Users.vue')
                },
                {
                    path: '/settings',
                    name: 'Settings',
                    component: () =>
                        import('./views/Settings.vue')
                },
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () =>
                import('@/layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/pages/login',
                    name: 'page-login',
                    component: () =>
                        import('@/views/pages/Login.vue')
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () =>
                        import('@/views/pages/Error404.vue')
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router