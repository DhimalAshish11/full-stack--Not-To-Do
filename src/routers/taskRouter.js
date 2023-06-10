import express from "express";

const router = express.Router();

let fakeDb = [
  {
    task: "watching tv",
    hr: 33,
    type: "entry",
    _id: "ase3",
  },
  {
    task: "cooking",
    hr: 3,
    type: "entry",
    _id: "ce3",
  },
  {
    task: "cooding",
    hr: 362,
    type: "entry",
    _id: "coo2",
  },
];

//read data from databse and retunr to clients

router.get("/", (req, res) => {
  res.json({
    message: "todo do Get Method",

    data: fakeDb,
  });
});

//Recieve data from client and create new record int o the databse
router.post("/", (req, res) => {
  console.log("got it", req.body);
  fakeDb.push(req.body);
  res.json({
    message: "New task has been added",
  });
});

///update record into databse based on the information recieved
router.patch("/", (req, res) => {
  console.log(req.body);

  const { _id, type } = req.body;
  fakeDb = fakeDb.map((item) => {
    if (item._id === _id) {
      return { ...item, type };
    }
    return item;
  });
  res.json({
    status: "success",
    message: "task has been switched",
  });
});

////delete on eor more records fromthe databse based on inofmation

router.delete("/", (req, res) => {
  const { _id } = req.body;
  console.log(_id);

  fakeDb = fakeDb.filter((item) => item._id !== _id);
  res.json({
    message: "The item has been deleted",
  });
});

export default router;
