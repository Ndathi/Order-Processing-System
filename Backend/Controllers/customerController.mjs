import { response } from "express";
import { User } from "../Models/customerModel.mjs";
const newCustomer = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json({
      id: "Add user",
      data: { newUser },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

const allCustomers = async (req, res) => {
  try {
    const data = await User.find();

    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.status(200).json({
      message: "Customer deleted successfully",
    });
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

const updateCustomer = async (req,res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    res.status(200).json({
      status: "success",
      message: "Customer updated successfully",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export { newCustomer, allCustomers, deleteCustomer, updateCustomer };

// export function getCustomer(req, res) {
//   res.send("Customer endpoint");
// }
