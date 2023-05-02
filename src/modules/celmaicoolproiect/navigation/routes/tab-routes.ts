export enum TabRoutes{
    Home = 'Home',
    Favorites = 'Favorites',
    Account = 'Account',
}

export type TabRouteProps = {
    [TabRoutes.Home]: undefined;
    [TabRoutes.Favorites]: undefined;
    [TabRoutes.Account]: undefined;
}