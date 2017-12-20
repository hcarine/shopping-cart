import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SimpleMediaCard from './SimpleMediaCard';
 
var productList = [{
  id: 1,
  name: 'first Product- exemple',
  coments: 'red tshirt pp',
  price: 10,
  tax: 5,
  total: 10
},
 {
  id: 2,
  name: 'first Product- exemple',
  coments: 'red tshirt pp',
  price: 20,
  tax: 5,
  total: 20
},
 {
  id: 3,
  name: 'first Product- exemple',
  coments: 'red tshirt pp',
  price: 10,
  tax: 5,
  total: 10
}
]
it('calculate total product value', () => {//test don't work
  const shallowRenderer = ReactTestUtils.render(
            <SimpleMediaCard data=productList />
        );
	expect(SimpleMediaCard.getTotal('total', productList)).toEqual(40);
	expect(SimpleMediaCard.getTotal('total', productList)).notEqual(20);
});
