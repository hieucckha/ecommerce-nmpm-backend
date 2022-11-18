module.exports = {
  checkHealth: async (req, res, next) => {
    res.send({
      message: "Hello, it's me, i'm from the other side",
    });
  },
};
