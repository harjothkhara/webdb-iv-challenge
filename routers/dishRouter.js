const express = require("express");

const db = require("../data/helpers/dishes-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const dishes = await db.find();
        if (dishes) {
            res.status(200).json(dishes);
        }
    } catch(error) {
        res.status(500).json({ message: `Dishes could not be found ${error}.`});
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const dish = await db.findById(id);
        if (dish) {
            res.status(200).json(dish);
        } else {
            res.status(404).json({ message: "Dish with specified ID does not exist."});
        }
    } catch(error) {
        res.status(500).json({ message: `Dish request failed ${error}`});
    }
});

router.post("/", async (req, res) => {
    const dish = req.body;
    if(!dish.name) {
        res.status(400).json({ message: "Please enter a valid dish name"});
    } else {
      try {
          const newDish = await db.create(dish);
          if(newDish) {
              res.status(201).json(newDish);
          }
      } catch(error) {
          res.status(500).json({ message: `Your dish could not be posted ${error}`});
      }
    }
});

router.delete("/:id", async(req,res) => {
    const { id } = req.params;
    try {
        const dish = await db.remove(id);
        if (dish) {
              res.status(200).json(dish);
        
        } else {
            res.status(404).json({ message: "The dish with the specified ID does not exist"});
        }
    } catch(error) {
        res.status(500).json({ 
            message: ` The dish's information could not be modified ${error}.`
      });
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newDish = req.body;

    if (!newDish.name) {
        res.status(400).json({ message: "Please enter a valid dish name" });
    } else {
        try {
            const editedDish = await db.update(newDish, id);
            if(editedDish) {
                res.status(200).json(editedDish);
            } else {
                res.status(404).json({
                    message: "The dish with the specified ID does not exist."
                });
            }
        } catch(error) {
            res.status(500).json({
                message: `The dish's information could not be modified: ${error}.`
            });
        }
    }   
});

module.exports = router;
