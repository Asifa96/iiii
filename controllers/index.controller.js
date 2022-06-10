module.exports = {
  index: async (req, res) => {
    const name = 'Doe';
    const title = 'programmer';

    return res.render('index', {
       name,
      title, });
  },
};
