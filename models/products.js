import db from '../database/config.js'

const Product = db.sequelize.define("product", {
  p_code: {
    type: db.DataTypes.STRING,
    required: true,
   unique:true,
  },
  p_name: {
    type: db.DataTypes.STRING,
    required: true,
  },
  p_description: {
    type: db.DataTypes.STRING,
    required: true,
  },
  p_price: {
    type: db.DataTypes.DECIMAL(8, 2),
    required:true,
  },
  p_qty: {
    type: db.DataTypes.INTEGER,
    required: true,
  },
  p_min_qty: {
    type: db.DataTypes.INTEGER,
    required: true,
  },
  p_issue_date: {
    type: db.DataTypes.DATE,
    required: true,
  },
  p_withdraw_date: {
    type: db.DataTypes.DATE,
    required: true,
  },
});


Product.sync()
export default Product