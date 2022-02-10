const PUBLIC_ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    EVENTS: '/eventos',
    DONATIONS: '/donations',
    VIDEOS: '/videos',
    QUESTIONNAIRES: '/questionnaires',
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
    ADMIN_QUESTIONNAIRES: '/admin/questionnaires',
    USERS: '/admin/users',
    MY_DONATIONS: '/my-donations',
    MY_EVENTS: '/my-events',
    GAME: (id, token, isTryingAgain) => `/game/${id}?token=${token}&isTryingAgain=${isTryingAgain}`,
    CREATE_QUESTIONNAIRE: '/admin/questionnaires/create',
    UPDATE_QUESTIONNAIRE: (id, token) => `/admin/questionnaires/update/${id}?token=${token}`
}

export const ROUTES = {
    ...PUBLIC_ROUTES,
    ...PRIVATE_ROUTES,
}