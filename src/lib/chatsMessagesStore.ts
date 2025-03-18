const chatsStore = new Map()

export function createChat(discussionId: string, messages: any[]) {
    chatsStore.set(discussionId, messages)
};

export function getChatMessages(discussionId: string) {
    const messages = chatsStore.get(discussionId)
    if (messages) {
        return messages as ({ role: string, content: string })[]
    }
    return []
};

export function addMessagesToChat(discussionId: string, messages: any[]) {
    chatsStore.set(discussionId, [...chatsStore.get(discussionId), ...messages])
};
