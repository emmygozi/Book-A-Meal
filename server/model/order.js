import dummymeals from '../model/meal';

const dataOrder = [
  {
    id: 1,
    menu: dummymeals[],
    price: 1500,
    ordertime: new Date(2018 - 10 - 4),
    deliverystatus: 0 // 0 delivery status represents pending *. It is of datatype tinyInt.
  },
  {
    id: 2,
    mealname: 'beans and bread',
    price: 1000,
    ordertime: new Date(2018 - 10 - 4),
    deliveryaddress: '12, Yaba, Lagos',
    deliverystatus: 1 // 1 delivery status represents delivered. It is of datatype tinyInt.
  }
];

export default dataOrder;
