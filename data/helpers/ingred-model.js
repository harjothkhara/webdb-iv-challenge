const db = require("../dbConfig.js");

module.exports = {
    find,
    findById,
    create,
    remove,
    update
};

async function find() {
    const ingredients = await db("ingredients");
    return ingredients;
}

async function findById(id){
    const ingredient = db("ingredients")
    .where({ id })
    .first();
  return ingredient;
}

async function create(item) {
    const [id] = await db("ingredients").insert(item);
      if(id) {
          const ingredient = await findById(id);
          return ingredient;
      }
}

async function remove(id) {
    const ingredient = await findById(id);
    if(ingredient) {
        const deleted = await db("ingredients")
            .where({ id })
            .del();
       if (deleted) {
        return ingredient;
       }     
    }
}

async function update(item, id) {
    const editedIngredient = await db("ingredients")
        .where({ id })
        .update(item);
     if(editedIngredient) {
         const ingredient = await findById(id);
         return ingredient;
     }   
}

function update(item, id) {}