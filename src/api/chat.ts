import { Ollama } from "ollama/browser";
const ollama = new Ollama({ host: "http://127.0.0.1:11434/" });


export default {
  chat: async (prompt: string) => {
    const response = await ollama.chat({
      stream: true,
      model: "llama3.1:8b",
      messages: [{ role: "user", content: "Why is the sky blue?" }],
    });
    for await (const part of response) {
      console.log("🚀  part", part)
    }
  },
};
