import contactImages from "../../assets/images";

let contacts = [
  {
    contactId: "Amilia Elie",
    name: "Amilia Elie",
    address: "South Sylhet",
    email: "amiliaelie@gmail.com",
    number: "+880 33456 777",
    image: contactImages.image2,
  },
  {
    contactId: "Allison Becker",
    name: "Allison Becker",
    address: "Rio de janeiro, Brazil ",
    email: "abecker@gmail.com",
    number: "+880 33456 777",
  },
  {
    contactId: "Serena Williams",
    name: "Serena Williams",
    address: "Texas, America",
    email: "serena@gmail.com",
    number: "+880 33456 777",
    image: contactImages.image2,
  },
  {
    contactId: "Lionel Messi",
    name: "Lionel Messi",
    address: "Argentina",
    email: "lmessi@gmail.com",
    number: "+880 1010 1010",
    image: contactImages.image2,
  },
  {
    contactId: "Cristiano Ronaldo",
    name: "Cristiano Ronaldo",
    address: "Porto, Portugal",
    email: "c.ronaldo@gmail.com",
    number: "+880 1010 1010",
    image: contactImages.image2,
  },
  {
    contactId: "Sergio Ramos",
    name: "Sergio Ramos",
    address: "Madrid, Spain",
    email: "ramos@gmail.com",
    number: "+880 33456 777",
  },
  {
    contactId: "Marco Verrati",
    name: "Marco Verrati",
    address: "Rome, Italy",
    email: "mverrati@gmail.com",
    number: "+880 33456 777",
    image: contactImages.image4,
  },
  {
    contactId: "Kylian Mbappe",
    name: "Kylian Mbappe",
    address: "Paris, France",
    email: "amiliaelie@gmail.com",
    number: "+880 33456 777",
  },
  {
    contactId: "Trent Arnold",
    name: "Trent Arnold",
    address: "Liverpool, England",
    email: "tarnold@gmail.com",
    number: "+880 33456 777",
    image: contactImages.image5,
  },
  {
    contactId: "Wilfred Ndidi",
    name: "Wilfred Ndidi",
    address: "Lagos, Nigeria",
    email: "wilNdidi@gmail.com",
    number: "+234 33456 777",
    image: contactImages.image3,
  },
  {
    contactId: "Zlatan Ibrahimovic",
    name: "Zlatan Ibrahimovic",
    address: "Sweden",
    email: "zIbra@gmail.com",
    number: "+122 33456 777",
    image: contactImages.image1,
  },
  {
    contactId: "Mikel Obi",
    name: "Mikel Obi",
    address: "South Sylhet",
    email: "amiliaelie@gmail.com",
    number: "+880 33456 777",
    image: contactImages.image2,
  },
  {
    contactId: "Kyle Walker",
    name: "Kyle Walker",
    address: "Rio de janeiro, Brazil ",
    email: "abecker@gmail.com",
    number: "+880 33456 777",
  },
  {
    contactId: "Virgil Van Dijk",
    name: "Virgil Van Dijk",
    address: "Madrid, Spain",
    email: "ramos@gmail.com",
    number: "+880 33456 777",
  },
];

contacts = contacts.sort((a, b) =>
  a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
);

export default contacts;
