import axios from "axios";

export async function getKanyeQuote(): Promise<string> {
    try {
        const quote = (await axios.get("https://api.kanye.rest/")).data.quote
        console.log(`Fetched Kanye quote:\n${quote}`)
        return quote
    }
    catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}