import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/DoctorDB")
  .then(() => {
    console.log("DB connected");
  })
  .catch(e => {
    console.log(e.message);
  });
export default mongoose;
 