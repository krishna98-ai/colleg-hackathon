import { log } from "console";
import express from "express";
const app = express();

app.post("/", (req, res) => {
  const { Name, RollNo } = req.body;
  if (
    !Name ||
    !RollNo ||
    [Name, RollNo].some((fields) => fields.trim() == "")
  ) {
    res.status(300).json({
      message: "field tera baap bhjega ? ",
    });
  }
  console.log(` name :${Name} , ROll No : ${RollNo}`);
  const data = {
    name: Name,
    rollNo: RollNo,
  };
  res.statusCode(200).json({
    message: "ye le kya yaad rkhega tu v ..",
    data: data,
  });
});

app.listen(3000, () => {
  console.log("server is listening at 3000");
});
