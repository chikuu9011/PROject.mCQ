import Qmodel from "./../models/Qmodel.js";

const insertdata = async (req, res) => {

    try {
      const Instance = new Qmodel(req.body);
      const ans_add = await Instance.save();
      res.send(ans_add);
    } catch (error) {
      console.log(error);
    }
};
const showdata = async (req, res) => {
  try {
    const ans = await Qmodel.find();
    res.send(ans);
  } catch (error) {}
};
const updatedata = async (req, res) => {
  try {
    const put_ans = await Qmodel.findByIdAndUpdate(req.params.id, req.body);
    res.send(put_ans);
  } catch (error) {
    console.log(error);
  }
};
const deletedata = async (req, res) => {
  try {
    const delete_ans = await Qmodel.findByIdAndRemove(req.params.id);
    res.send(delete_ans);
  } catch (error) {
    console.log(error);
  }
};

export { insertdata, showdata, updatedata, deletedata };
