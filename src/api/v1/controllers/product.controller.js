const productService = require('../services/product.service');

module.exports = {
  getInfo: async (req, res, next) => {
    const { productId } = req.body;
    
    const info = await productService.getInfo(productId);

    if (info === null) {
      return res.status(400).json({
        status: 'Not found',
        message: `Not found product with productId:${productId}`,
      });
    }

    return res.status(200).json({
      status: 'Success',
      info: info,
    });
  },
  getList: async (req, res, next) => {
    const products = await productService.getListProduct();

    return res.status(200).json({
      status: 'Success',
      products,
    });
  },
  getListShop: async (req, res, next) => {
    const { shopId } = req.body;

    const products = await productService.getListShop(shopId);

    if (products === null) {
      return res.status(400).json({
        status: 'Not found',
        message: `Not found product with shopId:${shopId}`,
      });
    }

    return res.status(200).json({
      status: 'Success',
      products,
    });
  },
};
