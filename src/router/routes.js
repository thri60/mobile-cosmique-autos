const routes = [{
        path: "/",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
                path: "",
                component: () =>
                    import ("pages/index.vue")
            },
            {
                path: "cars_details",
                component: () =>
                    import ("pages/cars_details.vue"),
                name: "cars_details",
                props: true
            },
            {
                path: "auction_cars_details",
                component: () =>
                    import ("pages/auction_details.vue"),
                name: "auction_cars_details",
                props: true
            },
            {
                path: "search",
                component: () =>
                    import ("pages/searchPage.vue"),
                name: "search"
            },
            {
                path: "auction",
                component: () =>
                    import ("pages/auction.vue"),
                name: "auction"
            },
            {
                path: "newCars",
                component: () =>
                    import ("pages/newCars.vue"),
                name: "newCars"
            },
            {
                path: "usedCars",
                component: () =>
                    import ("pages/usedCars.vue"),
                name: "usedCars"
            },
            {
                path: "help",
                component: () =>
                    import ("pages/help.vue"),
                name: "help"
            },
            {
                path: "login",
                component: () =>
                    import ("pages/login.vue"),
                name: "login"
            },
            {
                path: "dashboard",
                component: () =>
                    import ("pages/dashboard.vue"),
                name: "dashboard"
            },
            {
                path: "notification",
                component: () =>
                    import ("pages/notification.vue"),
                name: "notification"
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "*",
        component: () =>
            import ("pages/Error404.vue")
    }
];

export default routes;