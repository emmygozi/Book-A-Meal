

/* const dor = dummyorder;

if (dor.find(x => x.name === 'rice and chicken')) {
  console.log('found!');
} else {
  console.log('Not present');
} */


const dataOrder = [
  {
    id: 1,
    name: 'rice and chicken',
    price: 1500,
    imageid: 'Qw12345', // id to call saved image from file
    ordertime: '2018-7-13: 12:45AM',
    deliveryaddress: '12, Yaba, Lagos',
    deliverystatus: 0 // 0 delivery status represents pending *. It is of datatype tinyInt.
  },
  {
    id: 2,
    name: 'salad',
    price: 1500,
    imageid: 'Qw12345', // id to call saved image from file
    ordertime: '2018-7-13: 12:45AM',
    deliveryaddress: '12, Yaba, Lagos',
    deliverystatus: 1 // 1 delivery status represents delivered. It is of datatype tinyInt.
  }
];

export default dataOrder;
