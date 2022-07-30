/* https://jshero.platzi.com/exercises/5
Tienes un array de ordenes de compra con los siguientes atributos:

customerName: string
total: number
delivered: boolean
Debes filtrar todas las órdenes de compra que cumplan con la condición de tener un total mayor o igual a 100 y además que el estado delivered sea "true".
*/

function solution(array) {
	return array.filter(customer =>
		(customer.total >= 100 && customer.delivered)
	)
}; 

console.log(solution([
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  }
]))