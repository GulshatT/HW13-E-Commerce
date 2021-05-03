const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//done
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findAll({
      include: [{ model: Product, as: "products"}]
    });
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});
//done
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
    include: [{ model: Product, as: "products" }]
    });
    if (!tag) {
      res.status(404).json({ message: "No Tag found with this id!"});
      return;
    }
  
    res.status(200).json(allProduct);
  } catch (err) {
    res.status(500).json(err);
  }
  });
//done
router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).join(err);
  }
});
//done
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.update(req.body, {
      where: {id: req.params.id}
    });
    if (!tag) {
      res.status(404).json({ message: "No Tag with this id"});
      return;
    }
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

//done
router.delete('/:id',async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!tag) {
      res.status(404).json({ message: 'No Tag found with this id!' });
      return;
    }
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
