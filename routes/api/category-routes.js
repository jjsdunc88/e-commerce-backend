const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//get all categories, include associated Products
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]
  })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({ msg: error })
    })
});

// find one category by its `id` value, include associated Products
router.get('/:id', (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    include: [Product]
  })
    .then(data => {
      console.log("Data: ", data);
      console.log("Type: ", typeof data);

      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({ msg: error })
    })
});


// create a new category
router.post('/', (req, res) => {
  console.log("Req Body Data: ", req.body);
  console.log("Type: ", req.body);
  Category.create(req.body)

    .then((data) => res.json(data))
});



// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: { id: req.params.id },
  })
    .then((data) => res.json(data))

});


// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  },).then(data => {
    res.status(200).json(data);
  }).catch(err => {
    res.status(500).json(err);
  })
});


module.exports = router;
