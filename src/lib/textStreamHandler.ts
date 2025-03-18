
type Callbacks = {
    onChunk?: (chunk: string) => void,
    onEnd?: (fullResponse: string) => void,
}

export default async function textStreamHandler(stream: ReadableStream, options?: Callbacks) {
    const reader = stream.getReader();
    const decoder = new TextDecoder();

    let done = false;
    let fullResponse = "";
    while (!done) {
        const { value, done: readerDone } = await reader.read();
        if (readerDone) break;
        const chunk = decoder.decode(value)
        fullResponse += chunk
        options?.onChunk?.(chunk)
    }

    options?.onEnd?.(fullResponse)
};
