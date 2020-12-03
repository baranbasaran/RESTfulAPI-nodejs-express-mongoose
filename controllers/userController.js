const User = require("../models/User");
module.exports.user_post = async (req, res) => {
  const { userName, nickName, age, country } = req.body;

  //Creating a collection
  try {
    const user = await User.create({
      userName,
      nickName,
      age,
      country,
    });
    res.status(201).json({ status: "OK" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Error" });
  }
};

//Delete user
module.exports.user_delete = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({
      userName: req.body.userName,
    });
    res.status(201).json({ status: "OK" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Update user
module.exports.user_update = async (req, res) => {
  try {
    await User.findOneAndUpdate(
      {
        userName: req.body.userName,
      },
      {
        nickName: req.body.nickName,
        age: req.body.age,
        country: req.body.country,
      }
    );
    res.status(201).json({ status: "OK" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Get all user
module.exports.user_get = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get specify user
module.exports.user_getfind = async (req, res) => {
  try {
    var key = req.params.key;
    var value = req.params.value;
    const users = await User.find().where(key, value);
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Get age number of greater than req.params.number ...
module.exports.user_getcount = async (req, res) => {
  try {
    var numberofyears = parseInt(req.params.number); //convert Integer
    var age = { age: { $gte: numberofyears } };

    const users = await User.aggregate([
      { $match: age },
      {
        $group: {
          _id: "$age",
          count: { $sum: 1 },
          userName: { $first: "$userName" },
          nickName: { $first: "$nickName" },
          country: { $first: "$country" },
        },
      },

      //
    ]);
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Sort
module.exports.user_getorder = async (req, res) => {
  try {
    var field = req.params.field;
    var ascOrdesc = req.params.ascdesc;
    var mysort = [field, ascOrdesc];
    const users = await User.find().sort([mysort]);
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
