const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', (req, res) => {
  // find all tags, include associated Product data
  Tag.findAll({
    include: [Product]
  })
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    res.status(500).json({ msg: error})
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`, include associated Product data
  Tag.findOne({
    where: {id: req.params.id},
    include: [Product]
  })
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    res.status(500).json({ msg: error })
  })
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
