/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require('bcryptjs');

const adminsData = [
  {
    fullName: 'Sayeed Mahdi Mousavi',
    password: bcrypt.hashSync('Mahdi!', 10),
    email: 'sayeedmahdimousavi789gmail.com',
    role: 'ADMIN',
  },
  {
    fullName: 'Mahdi Mohammadi',
    password: bcrypt.hashSync('Mahdi!', 10),
    email: 'mahdi@gmail.com',
    role: 'ADMIN',
  },
];

export { adminsData };
