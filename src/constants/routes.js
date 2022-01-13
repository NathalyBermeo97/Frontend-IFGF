const PUBLIC_ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/register',
    EVENTS: '/eventos',
    DONATIONS: '/donations',
    VIDEOS: '/videos',
    GAMES: '/juegos',
    ECONOMIC_DONATIONS: '/donations/economic',
    FOOD_DONATIONS: '/donations/food',
    CLOTHES_DONATIONS: '/donations/clothes'
}

const PRIVATE_ROUTES = {
    ADMIN: '/admin',
    ADMIN_NEWS: '/admin/news',
    ADMIN_MESSAGES: '/admin/messages',
    ADMIN_ALBUMS: '/admin/albums',
    ADMIN_EVENTS: '/admin/events',
    ADMIN_DONATIONS: '/admin/donations',
    ADMIN_VIDEOS: '/admin/videos',
    ADMIN_GAMES: '/admin/games',
    USERS: '/admin/users',
    MY_DONATIONS: '/my-donations',
    MY_EVENTS: '/my-events'
}

export const ROUTES = {
    ...PUBLIC_ROUTES,
    ...PRIVATE_ROUTES,
}