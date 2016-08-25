"use strict";
var router_1 = require('@angular/router');
var appRoutes = [
    {
        path: 'heroes',
        component: 'HeroesComponent'
    },
    {
        path: 'dashboard',
        component: 'DashboardComponent'
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
// export configured router module for use in app.module
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map