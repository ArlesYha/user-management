import { Type } from '@sinclair/typebox'

export const idDTOSchema = Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'El tipo del _id no es válido, debe ser un string',
        format: 'El formato de _id no es válido, debe ser uuid4',
    }
});
export const nameDTOSChema = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        minLength: 'El nombre debe tener al menos 2 carateres de longitud',
        maxLength: 'El nombre debe tener como máximo 20 caracteres de longitud',
    },
});
export const surnameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        minLength: 'El apellido debe tener al menos 4 carateres de longitud',
        maxLength: 'El apellido debe tener como máximo 50 caracteres de longitud',
    },
});
export const emailDTOSchema = Type.String({
    format: 'email',
    errorMessage: {
        type: 'El tipo del email no es válido, debe ser un string',
        format: 'El formato del email no es válido, debe cumplir RFC 5322',
    }
});
export const passwordDTOSchema = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        type: 'El formato de la contraseña no es válido, debe ser un string',
        format: 'El formato de la password, debe contener mayúsculas, una minúscula y un número',
        minLength: 'La contraseña debe tener al menos 10 caracteres de longitud',
        maxLength: 'La contraseña debe tener como máximo 50 caracteres de longitud',
    },
});