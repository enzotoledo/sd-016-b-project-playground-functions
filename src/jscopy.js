let tech = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name = 'Lucas';
/*
let result = '';
tech.sort();

	if (tech.length === 0) { 
		result = 'Vazio!';
	} else {
		let techObject_0 = {
     		name: name,
			tech: tech[0]
		}
		let techObject_1 = {
			name: name,
      		tech: tech[1]
		}
		let techObject_2 = {
			name: name,
      		tech: tech[2]
		}
		let techObject_3 = {
			name: name,
      		tech: tech[3]
		}
		let techObject_4 = {
			name: name,
      		tech: tech[4]
		}
	result = [techObject_0, techObject_1, techObject_2,techObject_3, techObject_4];
	}
	console.log(result) */

	let result ;
	tech.sort();
	
	  if (tech.length === 0) { 
		console.log ('Vazio!');
	  } else {
		let techObject_0 = {
			name: name,
			tech: tech[0]
		}
		let techObject_1 = {
			name: name,
			tech: tech[1]
		}
		let techObject_2 = {
			name: name,
			tech: tech[2]
		}
		let techObject_3 = {
			name: name,
			tech: tech[3]
		}
		let techObject_4 = {
			name: name,
			tech: tech[4]
		}
	  console.log ([techObject_0, techObject_1, techObject_2,techObject_3, techObject_4]);
	  }

	  /* //---)-----
// console.log (techObject.name); 
resposta: Lucas

// console.log (key);
resposta:
0
1

// console.log (techObject[key]);
resposta:
'tech[index]',
'Lucas'

// console.log (key, techObject[key]);
resposta:
0 'tech[index]',
1 'Lucas';
 */