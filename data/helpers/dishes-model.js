const db = require("../dbConfig.js");

module.exports = {
    find,
    findById,
    create,
    remove,
    update
};

function find() {
    return db("dishes");
}

function findById(id){
    return db("dishes")
    .where({ id })
    .first();
}

function create(item) {
    return db("dishes")
        .insert(item)
        .then(([id]) => {
            return findById(id);
    });
}

async function remove(id) {
    const dish = await findById(id);
    if(dish) {
        const deleted = await db("dishes")
            .where({ id })
            .del();
         return dish;
    }
}

function update(item, id) {}