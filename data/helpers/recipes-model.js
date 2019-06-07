const db = require("../dbConfig.js");

module.exports = {
    find,
    findById,
    create,
    remove,
    update
};

async function find() {
    const recipes = await db("recipes");
    return recipes;
}

async function findById(id){
    const recipe = db("recipes")
    .where({ id })
    .first();
  return recipe;
}

async function create(item) {
    const [id] = await db("recipes").insert(item);
      if(id) {
          const recipe = await findById(id);
          return recipe;
      }
}

async function remove(id) {
    const recipe = await findById(id);
    if(recipe) {
        const deleted = await db("recipes")
            .where({ id })
            .del();
       if (deleted) {
        return recipe;
       }     
    }
}

async function update(item, id) {
    const editedRecipe = await db("recipes")
        .where({ id })
        .update(item);
     if(editedRecipe) {
         const recipe = await findById(id);
         return recipe;
     }   
}

function update(item, id) {}