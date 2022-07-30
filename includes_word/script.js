/* https://jshero.platzi.com/exercises/6
En este desafío vas a tener un string y debes buscar si ese string tiene un término de búsqueda, por ejemplo verificar si dentro de la frase "Ana lava la tina"
 está el término "ana" y si lo tiene retornar un true de lo contrario retornar un false, debes tener en cuenta que debe encontrar coincidencias, 
 así la el término de búsqueda sea mayúscula o minúscula.
*/

function solution(word='', query) {
	return word.toLowerCase().includes(query)
}; 

console.log(solution("Ana lava la tina", "ana"))
console.log(solution("Santiago", "tiago"))
console.log(solution("Nicolas", "ana"))