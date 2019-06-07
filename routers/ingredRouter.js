const express = require("express");

const db = require("../data/helpers/ingred-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const ingredients = await db.find();
        if (ingredients) {
            res.status(200).json(ingredients);
        }
    } catch(error) {
        res.status(500).json({ message: `Ingredients could not be found ${error}.`});
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const ingredients = await db.findById(id);
        if (ingredients) {
            res.status(200).json(ingredients);
        } else {
            res.status(404).json({ message: "Ingredients with specified ID does not exist."});
        }
    } catch(error) {
        res.status(500).json({ message: `Ingredients request failed ${error}`});
    }
});

router.post("/", async (req, res) => {
    const ingredients = req.body;
    if(!ingredients.name) {
        res.status(400).json({ message: "Please enter a valid ingredients name"});
    } else {
      try {
          const newIngredients = await db.create(ingredients);
          if(newIngredients) {
              res.status(201).json(newIngredients);
          }
      } catch(error) {
          res.status(500).json({ message: `Your ingredients could not be posted ${error}`});
      }
    }
});

router.delete("/:id", async(req,res) => {
    const { id } = req.params;
    try {
        const ingredients = await db.remove(id);
        if (ingredients) {
              res.status(200).json(ingredients);
        } else {
            res.status(404).json({ message: "The ingredients with the specified ID does not exist"});
        }
    } catch(error) {
        res.status(500).json({ 
            message: ` The ingredients information could not be modified ${error}.`
      });
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newIngredients = req.body;

    if (!newIngredients.name) {
        res.status(400).json({ message: "Please enter a valid ingredients name" });
    } else {
        try {
            const editedIngredients = await db.update(newIngredients, id);
            if(editedIngredients) {
                res.status(200).json(editedIngredients);
            } else {
                res.status(404).json({
                    message: "The ingredients with the specified ID does not exist."
                });
            }
        } catch(error) {
            res.status(500).json({
                message: `The ingredients information could not be modified: ${error}.`
            });
        }
    }   
});

module.exports = router;
