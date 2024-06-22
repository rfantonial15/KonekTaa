// pages/api/contacts.ts
import { NextApiRequest, NextApiResponse } from 'next';

interface Contact {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  course: string;
  details: string;
}

let contacts: Contact[] = [
  {
    id: 1,
    firstname: "Christian1",
    lastname: "Macatangay",
    email: "christian.macatangay@ustp.edu.ph",
    course: "Bachelor of Science in Information Technology",
    details: "",
  },
  {
    id: 2,
    firstname: "Nap Carlo",
    lastname: "Baclayon",
    email: "baclayon.nap@gmail.com",
    course: "Bachelor of Science in Information Technology",
    details: "",
  },
  {
    id: 3,
    firstname: "Randulf",
    lastname: "Fantonial",
    email: "fantonial.randulf@gmail.com",
    course: "Bachelor of Science in Information Technology",
    details: "",
  },
  {
    id: 4,
    firstname: "Yul John",
    lastname: "Jaranilla",
    email: "yuljhon.jaranilla@ustp.edu.ph",
    course: "Bachelor of Science in Information Technology",
    details: "",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(contacts);
  } else if (req.method === 'POST') {
    const { id, firstname, lastname, email, course, details } = req.body;
    const contact = contacts.find(contact => contact.id === id);
    if (contact) {
      contact.firstname = firstname;
      contact.lastname = lastname;
      contact.email = email;
      contact.course = course;
      contact.details = details;
      res.status(200).json({ message: 'Contact updated successfully' });
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
