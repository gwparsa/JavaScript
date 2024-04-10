//1. yek array misazim. 2. varzesh haye mored alaghe khod ra be in array ezafe konid. 3. item haye array khod ra dar yek string estefade konid. 4. item akhar array ra hazf konid. 5. yek array jadid baraye 2 item aval besazid va sepas an ra dar array asli jaigozari konid.

const firstArray = [];
firstArray.push("swimming", "shooting", "fitness", "walking");
const joinedArray = firstArray.join(" va ");

firstArray.pop();

const myString = `varzesh haye mored alaghe man ${joinedArray} ast.`

const secArray = [firstArray[0], firstArray[1]];
firstArray.splice(0 , 2, secArray[0], secArray[1]);

console.log(myString);