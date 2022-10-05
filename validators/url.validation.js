const { param, body } = require('express-validator');
const { validator } = require('./validator');


const getPraktikanByName = [
    body('nama').isLength({ min: 8 }),
    validator
]
const getPraktikanByMailPhone = [
    body('email').isEmail(),
    body('telepon').isLength(12),
    validator
]
const getPraktikanByGender = [
    body('jenis_kelamin').isIn(['L', 'P']),
    validator
]
const getPraktikanByAngkatan = [
    body('angkatan').isInt({ min: 2018 }),
    validator
]
const getPraktikanByEmail = [
    body('email').isEmail(),
    validator
]
const getPraktikanByTelepon = [
    body('telepon').isLength(12),
    validator
]
const getPraktikanByDeskripsi = [
    body('deskripsi').notEmpty(),
    validator
]

const insertUrl = [
    body('nama').isLength({ min: 8 }),
    body('jenis_kelamin').isIn(['P', 'L']),
    body('angkatan').isInt({ min: 2018 }),
    body('email').isEmail(),
    body('telepon').isLength(12),
    body('deskripsi').notEmpty(),
    validator
]

const deleteUrl = [
    validator
]

const updateUrl = [
    body('nama').isLength({ min: 8 }),
    body('jenis_kelamin').isIn(['P', 'L']),
    body('angkatan').isInt({ min: 2018 }),
    body('email').isEmail(),
    body('telepon').isLength(12),
    body('deskripsi').notEmpty(),
    validator
]
const createBULKpraktikan = [
    body('*.nama').isLength({ min: 8 }),
    body('*.jenis_kelamin').isIn(['P', 'L']),
    body('*.angkatan').isInt({ min: 2018 }),
    body('*.email').isEmail(),
    body('*.telepon').isLength(12),
    body('*.deskripsi').notEmpty(),
    validator
]
module.exports = {
    getPraktikanByMailPhone,
    getPraktikanByName,
    getPraktikanByGender,
    getPraktikanByEmail,
    getPraktikanByAngkatan,
    getPraktikanByTelepon,
    getPraktikanByDeskripsi,
    insertUrl,
    deleteUrl,
    updateUrl,
    createBULKpraktikan
}