import './App.css';
import Card from './components/Card';
import ChaiCard from './components/ChaiCard';
import Counter from './components/Counter';
import FormOrder from './components/FormOrder';
import Items from './components/Items';

import type { Chai } from './types';

const menu: Chai[] = [
  { id: 1, name: 'Masala', price: 30 },
  { id: 2, name: 'Ginger', price: 60 },
  { id: 3, name: 'Lemon', price: 40 },
];
function App() {
  return (
    <div>
      hello
      <ChaiCard name="Headphone" price={5000}></ChaiCard>
      <Counter></Counter>
      <div>
        <Items items={menu}></Items>
      </div>
      <div>
        <FormOrder
          onSubmit={(order) => console.log('Placed', order.name, order.cups)}
        ></FormOrder>
      </div>
      <div>
        <Card title="Chai with TS" footer={<button>Order now</button>}>
          <p>Guys</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
