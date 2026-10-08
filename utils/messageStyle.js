import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "𝑀𝑟.𝚃𝚘𝚖𝚖𝚢⃟ Shelby",
        body: "𓆩 𝑀𝑟.𝚃𝚘𝚖𝚖𝚢⃟ Shelby  𓆪",
        thumbnail: fs.readFileSync("./database/DigiX.jpg"),
        sourceUrl: "https://whatsapp.com",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}
