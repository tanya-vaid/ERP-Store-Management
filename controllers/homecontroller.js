const index = (req, res) => {
  const data = null;
  res.render("home/index", { data ,msg:"ALL PRODUCTS VIEW"});
};


export default {
    index,
}