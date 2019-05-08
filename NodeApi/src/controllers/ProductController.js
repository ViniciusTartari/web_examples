const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });
    //await - A próx linha só será executada quando estiver concluido o find;

    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async store(req, res) {
    //Criação
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    //o new: true é pra atualizar o product com o(s) novo(s) value(s)

    return res.json(product);
  },

  async destroy(req, res) {
    //Verificar findByIdAndDelete - deu warning no Remove
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  }
};
