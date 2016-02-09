Router.configure({
    layoutTemplate:'layout'
});

Router.map (function () {
    // home route
    this.route('home',{
        path: '/',
        template: 'home'
    });

    // about route
    this.route('about',{
        path: '/about',
        template: 'about'
    });
})
