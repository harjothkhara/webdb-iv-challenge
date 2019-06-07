const db = require("../dbConfig.js");

module.exports = {
  find,
  findById,
  create,
  remove,
  update
};

async function find() {
  const dishes = await db("dishes");
  return dishes;
}

async function findById(id) {
  const dish = await db("dishes")
    .select({ name: "dishes.name", id: "dishes.id", recipes: "recipes.name" })
    .innerJoin("recipes", "recipes.dish_id", "dishes.id")
    .where({ "dishes.id": id })
    .first();
  return dish;
}

async function create(item) {
  const [id] = await db("dishes").insert(item);
  if (id) {
    const dish = await findById(id);
    return dish;
  }
}

async function remove(id) {
  const dish = await findById(id);
  if (dish) {
    const deleted = await db("dishes")
      .where({ id })
      .del();
    if (deleted) {
      return dish;
    }
  }
}

async function update(item, id) {
  const editedDish = await db("dishes")
    .where({ id })
    .update(item);
  if (editedDish) {
    const dish = await findById(id);
    return dish;
  }
}