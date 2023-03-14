const products =[
    { name:'laptop',price:60000,brand:'hp',color:'silver'},
    { name:'wal',price:6900,brand:'hpz',color:'red'},
    { name:'ip',price:600,brand:'hp',color:'khaki'},
    { name:'desktop',price:600,brand:'hp',color:'naki'}
];
// 1.Map
// const brands = products.map(product =>product.brand)
// const p =products.map(product => product.price)
// console.log(p);
// console.log(brands);
// forEach
// products.forEach(product => console.log(product.color))
// products.forEach(product=>{

// })

// 3.filter
// const cheap = products.filter(product => product.price <=5000)
// console.log(cheap);

// const pName = products.filter(product => product.name.includes('p'))
// console.log(pName);

// 4.find

const pName = products.find(product => product.name.includes('p'))
console.log(pName);