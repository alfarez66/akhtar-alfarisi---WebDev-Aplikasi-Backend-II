const { urlServices } = require('../services');
const { responseHelper } = require('../helper');

const getUrls = async(req, res) => {
    try {

        const urls = await urlServices.getPraktikan();
        if (urls instanceof Error) {
            throw new Error(urls);
        }
        res.status(responseHelper.status.success).json(urls);

    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getUrlByName = async(req, res) => {
    try {
        const { nama } = req.body;
        const url = await urlServices.getPraktikanByName(nama);
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getPraktikanByEmailPhone = async(req, res) => {
    try {
        const { email, telepon } = req.body;
        const url = await urlServices.getPraktikanByEmailPhone(email, telepon);
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const insertUrl = async(req, res) => {
    try {

        const { nama, jenis_kelamin, angkatan, email, telepon, deskripsi } = req.body;
        const result = await urlServices.createPraktikan(nama, jenis_kelamin, angkatan, email, telepon, deskripsi);
        if (result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const deleteUrl = async(req, res) => {
    try {
        const { email } = req.body;
        const result = await urlServices.deletePraktikan(email);
        if (result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const updateUrl = async(req, res) => {
    try {
        const { nama, jenis_kelamin, angkatan, email, telepon, deskripsi } = req.body;
        const result = await urlServices.updatePraktikanByName(nama, jenis_kelamin, angkatan, email, telepon, deskripsi);
        if (result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const createBulkPraktikan = async(req, res) => {
    try {
        const url = await urlServices.createBulkPraktikan(JSON.stringify(req.body));

        if (url instanceof Error) {
            throw new Error(url);
        }

        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
module.exports = {
    getUrls,
    getUrlByName,
    getPraktikanByEmailPhone,
    insertUrl,
    deleteUrl,
    updateUrl,
    createBulkPraktikan
}