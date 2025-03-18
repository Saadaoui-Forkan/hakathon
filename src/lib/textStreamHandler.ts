
type Callbacks = {
    onChunk?: (chunk: string) => void,
    onEnd?: () => void,
}

export default async function textStreamHandler(stream: ReadableStream, options?: Callbacks) {
    const reader = stream.getReader();
    const decoder = new TextDecoder();

    let done = false;
    while (!done) {
        const { value, done: readerDone } = await reader.read();
        if (readerDone) break;
        options?.onChunk?.(decoder.decode(value))
    }

    options?.onEnd?.()
};
