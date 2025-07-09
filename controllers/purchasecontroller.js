import Requisition from "../models/requisition.js";
import Product from "../models/products.js";
import Po from "../models/po.js";
import { Op } from "sequelize";

const index = (req, res) => {
    const data = null;
    const data1 = null;
  res.render("purchase/index", { data,data1 });
};


const po = async (req, res) => {
    const data1 = null;
    const data = await Requisition.findAll({where:{r_status:true,r_po_status:false}});
    
  res.render("purchase/po", { data, data1 });
};

const po_create = async (req, res) => {
    const id = req.params.id
    console.log(id)
    const data = await Requisition.findAll({ where: { id: id } })
    console.log(data)
    res.render("purchase/po_create", { data });
};

const create_po = async (req, res) => {
  let countp = await Po.count();
  countp = countp + 600001;
    console.log(req.body)
    
  const po = Po;
  po.r_code = countp;
    po.r_name = req.body.r_name.toUpperCase();
    console.log(req.body.r_code)
    po.p_code = req.body.r_code  
    console.log(po.p_code)
  po.r_description = req.body.r_description.toUpperCase();
  po.r_cost = req.body.r_cost;
  po.r_qty = req.body.r_qty;
  po.r_issue_date = req.body.r_issue_date;
  po.r_party_name = req.body.r_party_name 

    await Po.create(po);
    Requisition.update({ r_po_status: true }, { where: { r_name: po.r_name } });
    console.log(po.r_name)
  res.redirect("/purchase/viewallpo");
};

const find = async (req, res) => {
  const id = req.params.id;
  const data = await Requisition.findByPk(id);
  console.log(data)
  res.json(data);
};

const findm = async (req, res) => {
    const code = req.params.id;
    const dd = await Requisition.findOne({ where: { r_code: code } });
     res.json(dd);
};

const create_requisition = async (req, res) => {
  let countp = await Requisition.count();
  countp = countp + 500001;

  const requisition = Requisition;
  requisition.r_code = countp;
  requisition.r_name = req.body.r_name.toUpperCase();
  requisition.r_description = req.body.r_description.toUpperCase();
  requisition.r_cost = req.body.r_cost;
  requisition.r_qty = req.body.r_qty;
    requisition.r_status = false
    requisition.r_po_status =false
  requisition.r_issue_date = req.body.r_issue_date;
  requisition.r_approval_date = req.body.r_issue_date;

  Requisition.create(requisition);
  res.redirect("/purchase/viewallpo");
};

const view_all = async (req, res) => {
    const data = await Requisition.findAll();
    const data1 =null

  res.render("purchase/index", { data,data1 });
};

const view_all_po = async (req, res) => {
  const data = await Po.findAll();
  
  res.render("purchase/viewallpo", { data});
};



const approve = async (req, res) => {
    const data = null
  const data1 = await Requisition.findAll();

  res.render("purchase/index", { data,data1 });
};

const approvep = async (req, res) => {
    const id = req.params.id
    console.log(id)

   await Requisition.update(
      { r_status:true},
      { where: { id: id } }
    );
    

  const data = null;
  const data1 = await Requisition.findAll();

  res.render("purchase/index", { data, data1 });
};



const stockcharge = async (req, res) => {
   

  const product = Product;
  product.p_code = req.body.r_code
  product.p_name = req.body.r_name.toUpperCase();
  product.p_description = req.body.r_description.toUpperCase();
  product.p_price = req.body.r_cost;
  product.p_qty = req.body.r_qty;
  product.p_min_qty = req.body.r_min_qty;
  product.p_issue_date = req.body.r_issue_date;
  product.p_withdraw_date = req.body.r_issue_date;

  Product.create(product);
  res.redirect("/store/viewall");
};

export default {
  index,
    create_requisition,
    view_all,
    view_all_po,
    approve,
    approvep,
    po,
    po_create,
    find,
    create_po,
    findm,
    stockcharge,
};
