import faker from 'faker';
import { factory } from 'factory-girl';

import Cliente from '../src/app/models/Cliente';

factory.define('Cliente', Cliente, {
  nome: faker.name.findName(),
  email: faker.internet.email(),
  dataDeNascimento: faker.date.past(),
});

export default factory;
