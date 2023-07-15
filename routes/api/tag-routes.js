const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags, include associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    include: [Product]
  })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({ msg: error })
    })
});


// find a single tag by its `id`, include associated Product data
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: { id: req.params.id },
    include: [Product]
  })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({ msg: error })
    })
});


// create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then(data => res.status(200).json(data))
});


// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: { id: req.params.id },
  })
    .then(data => res.status(200).json(data))
});


// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({ where: { id: req.params.id } })
    .then(data => res.status(200).json(data))
});


module.exports = router;
