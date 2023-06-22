import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/*
type User @model @auth(rules: [
  { allow: owner, operations: [create, update, read, delete] },
  { allow: public, provider: iam, operations: [create, read] }
]) {
  id: ID!
  email: String!
  firstName: String
  lastName: String
  newsletter: Boolean
}


*/