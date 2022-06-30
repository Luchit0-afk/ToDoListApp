var Task = require('./../../schemas/task_schema.js');

module.exports.newTask = async function (req, res) {
  try{
    await Task.create({ 
        name: "Luciano Palacio",
        description: "This is a description",
        expiration_date: Date.now(),
        security_code: 1234,
    });
    res.status(200).json({});
  } catch(error) {
    console.log(error);
    res.status(401).json({success: false, error: error});
  }
};