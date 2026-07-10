const express = require("express");

const router = express.Router();

// Temporary storage
let contacts = [];

// Add Contact
router.post("/add", (req, res) => {
  const { name, phone, relation } = req.body;

  const contact = {
    id: contacts.length + 1,
    name,
    phone,
    relation,
  };

  contacts.push(contact);

  res.status(201).json({
    message: "Contact Added Successfully",
    contact,
  });
});

// View All Contacts
router.get("/", (req, res) => {
  res.json(contacts);
});

// Delete Contact
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  contacts = contacts.filter((contact) => contact.id !== id);

  res.json({
    message: "Contact Deleted Successfully",
  });
});

module.exports = router;