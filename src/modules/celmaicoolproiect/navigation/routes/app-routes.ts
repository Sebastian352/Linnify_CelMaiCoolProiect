
export enum AppRoutes{
    Main = 'Main',
    MainNav = 'MainNav',
    Auth = 'Auth',
    Edit = 'Edit',
    Details = 'Details',
}

export type AppRouteProps = {
    [AppRoutes.Main]: undefined;
    [AppRoutes.Auth]:undefined;
    [AppRoutes.MainNav]:undefined;
    [AppRoutes.Edit]:undefined;
    [AppRoutes.Details]:undefined;
}