import dummyorder from '../model/meal';

/* const dor = dummyorder;

if (dor.find(x => x.name === 'rice and chicken')) {
  console.log('found!');
} else {
  console.log('Not present');
} */

const dataOrder = [
  {
    id: 1,
    order: dummyorder[0],
    ordertime: new Date(),
    deliverystatus: 0 // 0 delivery status represents pending *. It is of datatype tinyInt.
  },
  {
    id: 2,
    menu: dummyorder[1],
    ordertime: new Date(),
    deliveryaddress: '12, Yaba, Lagos',
    deliverystatus: 1 // 1 delivery status represents delivered. It is of datatype tinyInt.
  }
];

export default dataOrder;
