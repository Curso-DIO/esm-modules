

// import * as database from "./utils/database.js";

// async function main(){
//     await database.connectToDatabase('Postgres')
//     await database.disconnectToDatabase();
// }

// main();

// ou

import { connectToDatabase, disconnectToDatabase, databaseType } from "./utils/database.js";
import { getDataFromApi, key } from './utils/api.js'

async function main() {
    await connectToDatabase(databaseType.userType)
    await disconnectToDatabase();
    await getDataFromApi();
    console.log(key.value)
}

main();

//Qual é a diferença entre CommonJS e ECMAScript Modules (ESM) em Node.js?