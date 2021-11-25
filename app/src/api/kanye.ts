import axios from "axios";

export async function getKanyeQuote(): Promise<string> {
    // await axios.get("https://api.kanye.rest/").then((response) => {
    //     console.log(response.data.quote)
    //     return response.data.quote
    // }).catch((error) => {
    //     console.error(error)
    //     return "KANYE ERROR. SEE CONSOLE."
    // })

    try {
        const quote: Promise<string> = (await axios.get("https://api.kanye.rest/")).data.quote
        console.log(`Fetched Kanye quote:\n${quote}`)
        return quote
    }
    catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}
