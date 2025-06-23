import { nanoid } from 'nanoid'
import express , { Request , Response } from 'express'
import dotenv from 'dotenv'


dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json())


interface shortURL {
    id: string;
    originalURL : string
}

const shortenedURL : shortURL[] = []

// LongURL into the shortenedURL

app.post("/shorten", (req:Request, res:Response) =>{
    const {originalURL} = req.body;

    if (!originalURL){
        return res.status(400).json({error: "LongURL is required"});
    }

    const shortId = nanoid(6)

    shortenedURL.push({originalURL: originalURL , id: shortId})

    res.json({shortURL : `http://localhost:${PORT}/${shortId}`})
})

// Redirect to OriginalURL

app.get("/:shortId", (req: Request , res:Response) =>{
    const {shortId} = req.params;
    const originalURL = shortenedURL.find(url => url.id === shortId)

    if(!originalURL){
        return res.status(400).json({error:"Short URl not found "})
    }
    res.status(301).redirect(originalURL.originalURL)
})

app.listen(PORT, () => {
    console.log(`Server Listing on Port : ${PORT}`)
})