const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://oleg31:${password}@cluster0.8i2l4.mongodb.net/noteapptest?retryWrites=true&w=majority`;
mongoose.set("strictQuery", false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// Note.find({ important: false }).then((result) => {
//   result.forEach((note) => {
//     console.log(note);
//   });
//   mongoose.connection.close();
// });

const note1 = new Note({
  content: "HTML is easy",
  important: true,
});

note1.save().then(() => {
  console.log("note saved!");
});

const note2 = new Note({
  content: "CSS is not so easy",
  important: false,
});

note2.save().then(() => {
  console.log("note saved!");
  mongoose.connection.close();
});
