const databaseType = {
    userType: "admin",
    typeData: "dataLocal"
}

async function connectToDatabase(dataName) {
    console.log(`Conectado com o banco: ${dataName}`)
}

async function disconnectToDatabase() {
    console.log(`Desconectando com o banco de dados...`)
}

export {
    connectToDatabase,
    disconnectToDatabase,
    databaseType
} 