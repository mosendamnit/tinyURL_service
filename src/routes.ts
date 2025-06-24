import { nanoid } from 'nanoid'
import express , { Request , Response } from 'express'
import validator from 'validator';
import dotenv from 'dotenv'


const router = express.Router();
dotenv.config();
const PORT = process.env.PORT;



interface shortURL {
    id: string;
    originalURL : string
}

const shortenedURL : shortURL[] = []

// LongURL into the shortenedURL

router.post("/api/v1/shorten", (req:Request, res:Response) =>{
    const {originalURL} = req.body;

    if (!originalURL){
        return res.status(400).json({error: "LongURL is required"});
    }

    if (!validator.isURL(originalURL)){
        return res.status(400).json({error: "Invalid URL"})
    }

    const shortId = nanoid(6)

    shortenedURL.push({originalURL: originalURL , id: shortId})

    res.json({shortURL : `http://localhost:${PORT}/${shortId}`})
})

// Redirect to OriginalURL

router.get("/u/:shortId", (req: Request , res:Response) =>{
    const {shortId} = req.params;
    const originalURL = shortenedURL.find(url => url.id === shortId)

    if(!originalURL){
        return res.status(400).json({error:"Short URl not found "})
    }
    res.status(301).redirect(originalURL.originalURL)
})

export default router;
