import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv"


dotenv.config({ path: './config.env' });
const uri = process.env.ATLAS_URI || ""
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

try {
    await client.connect()
    await client.db("admin").command({ping:1})
    console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
    )
} catch(err) {
    console.log(err)
}



let db = client.db("employees")
export default db