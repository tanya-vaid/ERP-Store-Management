import db from "../database/config.js";

const Po = db.sequelize.define("po", {
  r_code: {
    type: db.DataTypes.STRING,
    required: true,
    unique: true,
  },
  p_code: {
    type: db.DataTypes.STRING,
    required: true,
    unique: true,
  },
  r_name: {
    type: db.DataTypes.STRING,
    required: true,
  },
  r_description: {
    type: db.DataTypes.STRING,
    required: true,
  },
  r_qty: {
    type: db.DataTypes.INTEGER,
    required: true,
  },
  r_cost: {
    type: db.DataTypes.DECIMAL(8, 2),
    required: true,
  },

  r_issue_date: {
    type: db.DataTypes.DATE,
    required: true,
  },
  r_party_name: {
    type: db.DataTypes.STRING,
    required: true,
  },
});

Po.sync();
export default Po;
