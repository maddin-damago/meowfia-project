import express from "express";
import cors from "cors";
import { writeFile, readFile } from "node:fs/promises";

const app = express();
const PORT = 1234;

app.use(express.json());
app.use(cors());

app.post("/api/members", (req, res) => {
	const id = Date.now();
	const newCat = {
		catId: id,
		catName: req.body.catName,
		catRank: req.body.catRank,
		catSpecialty: req.body.catSpecialty,
		catAvatar: `https://robohash.org/${req.body.catName}.png?set=set4`,
		catStatus: "active"
	}
	saveCat(newCat);
	res.sendStatus(201);
})

app.get("/api/members", async (req, res) => {
	const data = await readFile("./assets/meowfia.json");
	res.send(data);
})

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
})

async function saveCat(cat) {
	const catFileData = JSON.parse(await readCats());
	const newCatFileData = [...catFileData, cat];
	try {
		writeFile("./assets/meowfia.json", JSON.stringify(newCatFileData, null, 2));
	} catch(error) {
		console.log(error.message);
	}
}

async function readCats() {
	try{
        	const data = await readFile("./assets/meowfia.json");
        	return data;
    	}catch(error){
        	console.log(error.message);
    	}
	
}

