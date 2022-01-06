export const SERVER_RESPONSE = {
    SUCCESFUL_USER_REGISTRATION: "Usuario registrado con exito",
    NEWS_ITEM_CREATED: 'registro de donación correctamente'
}

export const ERROR_MESSAGES = {
    MATCH: 'Entrada no válida',
    EMAIL: 'El campo debe ser un email válido',
    REQUIRED: (field) => `El campo ${field} es requerido`,
    NUMBER: (field) => `El campo ${field} debe ser un número`,
    MIN: (field, min) => `El campo ${field} debe tener al menos ${min} caracteres`
}