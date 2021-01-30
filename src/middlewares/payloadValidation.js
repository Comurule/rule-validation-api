const check_payload = (req, res, next) => {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });

  req.on('end', () => {
    try {
      JSON.parse(data);
    } catch (error) {
      res.status(400).json({
        message: 'Invalid JSON payload passed.',
        status: 'error',
        data: null,
      });
    }
  });

  next();
};

module.exports = check_payload;
