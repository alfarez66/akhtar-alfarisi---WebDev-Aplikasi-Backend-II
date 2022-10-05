const { databaseQuery } = require('../database');

const getPraktikan = async() => {
    try {
        const query = `SELECT * FROM akhtar_webdev`;
        // Return from SELECT query is an array of objects
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}

const getPraktikanByName = async(name) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM akhtar_webdev WHERE nama='${name}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM akhtar_webdev WHERE nama=$1`;
        // const result = await databaseQuery(query, [name]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}
const getPraktikanByEmailPhone = async(email, telepon) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM akhtar_webdev WHERE email='${email}' and telepon='${telepon}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM akhtar_webdev WHERE email=${1} and telepon=${2}`;
        // const result = await databaseQuery(query, [email, telepon]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const createPraktikan = async(nama, jenis_kelamin, angkatan, email, telepon, deskripsi) => {
    try {
        // This is not safe, but it's just an example
        const query = `INSERT INTO akhtar_webdev VALUES ('${nama}', '${jenis_kelamin}',${angkatan},'${email}','${telepon}','${deskripsi}')`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `INSERT INTO akhtar_webdev (nama,jenis_kelamin,angkatan,email,telepon,deskripsi) VALUES ($1, $2, $3 ,$4 ,$5 ,$6 )`;
        // const result = await databaseQuery(query, [nama, jenis_kelamin, angkatan, email, telepon, deskripsi]);

        if (!result) {
            throw new Error('Error inserting Praktikan');
        }
        return {
            message: 'Praktikan inserted successfully',
        };
    } catch (error) {
        return error
    }
}

const createBulkPraktikan = async(shet) => {
    try {
        let doom = []
        JSON.parse(shet, (a, b) => { doom.push(b) })
        for (let a = 0; a < (doom.length - 1) / 7; a++) {
            const query = `insert into akhtar_webdev values ('${doom[a*7]}','${doom[(a*7)+1]}','${doom[(a*7)+2]}','${doom[(a*7)+3]}','${doom[(a*7)+4]}','${doom[(a*7)+5]}')`;
            const result = await databaseQuery(query);
            if (!result) {
                throw new Error('Error updating URL');
            }
            if (result.rowCount === 0) {
                throw new Error('URL not found');
            }
        }
        return {
            message: 'URL updated successfully',
        };

    } catch (error) {
        return error
    }
}

const deletePraktikan = async(email) => {
    try {
        // This is not safe, but it's just an example
        const query = `DELETE FROM akhtar_webdev WHERE email='${email}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `DELETE FROM akhtar_webdev WHERE email=$1`;
        // const result = await databaseQuery(query, [email]);

        if (!result) {
            throw new Error('Error deleting Praktikan');
        }
        if (result.rowCount === 0) {
            throw new Error('Praktikan not found');
        }
        return {
            message: 'Praktikan deleted successfully',
        };
    } catch (error) {
        return error
    }
}

const updatePraktikanByName = async() => {
    try {
        // This is not safe, but it's just an example
        const query = `UPDATE akhtar_webdev SET jenis_kelamin='${jenis_kelamin}', deskripsi='${deskripsi}',angkatan='${angkatan}',email='${email}',telepon='${telepon}' WHERE nama='${nama}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `UPDATE akhtar_webdev SET jenis_kelamin=$1, deskripsi=$2,angkatan=$3,email=$4,telepon=$5 WHERE nama=$6`;
        // const result = await databaseQuery(query, [jenis_kelamin, deskripsi, angkatan, email, telepon, nama]);
        if (!result) {
            throw new Error('Error deleting Praktikan');
        }
        if (result.rowCount === 0) {
            throw new Error('Praktikan not found');
        }
        return {
            message: 'Praktikan updated successfully',
        };
    } catch (error) {
        return error
    }
}

module.exports = {
    getPraktikan,
    getPraktikanByName,
    getPraktikanByEmailPhone,
    createPraktikan,
    deletePraktikan,
    updatePraktikanByName,
    createBulkPraktikan
}