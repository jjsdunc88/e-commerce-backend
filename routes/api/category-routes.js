const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//get all categories
router.get('/', (req, res) => {
  // find all categories, include associated Products
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
  
  router.get('/:id', (req, res) => {
    // we want to capture the ID value
    console.log("Request Object: ", req)
    console.log("Request Parameters Obj: ", req.params);
    // find one category by its `id` value, include associated Products
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

router.post('/', (req, res) => {
  console.log("Req Body Data: ", req.body);
  console.log("Type: ", req.body);
  Category.create(req.body)

  .then((data) =>  res.json(data) )

  });

  // res.send("recieved Data");


router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
