const express = require("express")
const app = express();

const users = [{
  name: "raaj",
  bottles: [{
    fullbottle: false
  }]
}];

app.use(express.json());

app.get("/", function (req, res) {
  const raajbottles = users[0].bottles;
  const numberofbottles = raajbottles.length;
  let numberoffullbottles = 0;
  for (let i = 0; i < raajbottles.length; i++) {
    if (raajbottles[i].fullbottle) {
      numberoffullbottles = numberoffullbottles + 1;
    }
  }
  const numberofhalfbottles = numberofbottles - numberoffullbottles;
  res.json({
    numberofbottles,
    numberoffullbottles,
    numberofhalfbottles
  })
})

app.post("/", function (req, res) {

  const isfull = req.body.isfull;
  users[0].bottles.push({
    fullbottle: isfull
  })
  res.json({
    msg: "done"
  })
})
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].bottles.length; i++) {
    users[0].bottles[i].fullbottle = true;
  }
  res.json({});

})

app.delete("/", function (req, res) {
  if (isthereatleastonehalfbottle()) {
    const newbottles = [];
    for (let i = 0; i < users[0].bottles.length; i++) {
      if (users[0].bottles[i].fullbottle) {
        newbottles.push({
          fullbottle: true
        })
      }
    }
    users[0].bottles = newbottles;
    res.json({
      msr: "done"
    })
  } else {
    res.status(411).json({
      msg: "you have no half bottles"
    })
  }

})


function isthereatleastonehalfbottle() {
  let atleastonrhalfbottle = false
  for (let i = 0; i < users[0].bottles.length; i++) {
    if (!users[0].bottles[i].fullbottle) {
      atleastonrhalfbottle = true;
    }
  }
  return atleastonrhalfbottle
}
app.listen(3000)