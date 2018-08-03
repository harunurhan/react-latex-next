import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: 'deep', noKey: false}) as any);