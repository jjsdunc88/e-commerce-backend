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
  Tag.create(req.body)
  .then(data =>  res.status(200).json(data))
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: { id: req.params.id },
})
 .then(data =>  res.status(200).json(data))

});

router.delete('/:id', (req, res) => {
  Tag.destroy({ where: { id: req.params.id } })
  .then(data =>  res.status(200).json(data))
});

module.exports = router;
