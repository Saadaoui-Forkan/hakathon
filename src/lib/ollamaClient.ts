import { Ollama } from 'ollama'

let ollamaClient: Ollama;

if (process.env.NODE_ENV === "development") {
    const globalForOllama = globalThis as unknown as { ollamaClient?: Ollama };

    ollamaClient = globalForOllama.ollamaClient ?? new Ollama({ host: process.env.OLLAMA_HOST });

    if (!globalForOllama.ollamaClient) {
        globalForOllama.ollamaClient = ollamaClient;
    }
} else {
    ollamaClient = new Ollama({ host: process.env.OLLAMA_HOST });
}

export default ollamaClient;
