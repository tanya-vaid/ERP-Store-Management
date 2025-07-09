import Product from '../models/products.js'
import {Op} from 'sequelize'
import moment from "moment";


const index = (req, res) => {
  const data = null;
  res.render("store/index", { data,msg:"ALL ITEMS VIEW" });
};

 

const view_all = async (req, res) => {
  const data = await Product.findAll()
  
  res.render("store/index", { data, msg: "ALL ITEMS VIEW" });
};

const indents = async (req, res) => {
    const data = await Product.findAll({
        where: {
            p_qty: { [Op.lte]: { [Op.col]: 'p_min_qty'} }
    }
    })
    console.log(data)
  res.render("store/index", { data, msg: "ALL ITEMS FOR INDENT" });
};

const add_p = async (req, res) => {
  let countp =await  Product.count()
  countp = countp + 6500001
  
  const product = Product
    product.p_code=countp
    product.p_name = req.body.p_name.toUpperCase() 
  product.p_description = req.body.p_description.toUpperCase(); 
  product.p_price = req.body.p_price; 
    product.p_qty = req.body.p_qty 
    product.p_min_qty = req.body.p_min_qty 
    product.p_issue_date = req.body.p_issue_date 
    product.p_withdraw_date = req.body.p_issue_date
    
    Product.create(product)
    res.redirect('/store/viewall')
    
}

const find_p = async (req, res) => {
    const id = req.params.id
    const data = await Product.findByPk(id)
    
     res.json(data)
}

const issue_p = async (req, res) => {
    const id = req.body.p_id;
    const product = await Product.findByPk(id)
    var qty = product.p_qty
    var nqty = req.body.p_qty;
     qty = parseInt(qty) - parseInt(nqty);

    await Product.update({ p_qty:  qty,p_withdraw_date:req.body.p_withdraw_date }, { where: { id: id} })
    res.redirect("/store/viewall");
}

const update_p = async (req, res) => {
  const id = req.body.p_id;
  const product = await Product.findByPk(id);
  var qty = product.p_qty;
  var nqty = req.body.p_qty;
  qty = parseInt(qty) + parseInt(nqty);

  await Product.update(
    { p_qty: qty, p_issue_date: req.body.p_withdraw_date },
    { where: { id: id } }
    );
    res.redirect('/store/viewall')
};

export default {
  index,
  add_p,
  find_p,
  view_all,
  indents,
  issue_p,
  update_p
}