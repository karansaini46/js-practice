const zod = require("zos");

function validateinput(obj){
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string()minLength(8)
  })
  const response = schema.safeparse(obj);
  console.log(response);
}

application.post("/login", function(req,res){
  const response = validateinput(req.body)
  if (!response.success){
    res.json({
      msg: "your inputs are invalid"
    })
    return;
  }
})