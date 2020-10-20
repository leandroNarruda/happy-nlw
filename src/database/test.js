const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db =>{
    await saveOrphanage(db, {
        lat:"-27.222633",
        lng:"-49.6455874", 
        name:"Lar das véia",
        about:"Presta assistência à crianças de 0 a 15 anos",
        whatsapp:"41992422122",
        images: [
            "https://images.unsplash.com/photo-1576883600124-64c5aa68b4bc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9","https://images.unsplash.com/photo-1572247324584-a841c32b95ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions:"Venha como se sentir à vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horário de visitas: das 08h às 18h",
        open_on_weekends:"1"
    })
    const selectedOrphanages=await db.all("SELECT * FROM orphanages")
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(selectedOrphanages)
    //console.log(await db.run('DELETE FROM orphanages WHERE id="4"'))
})