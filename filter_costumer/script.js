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