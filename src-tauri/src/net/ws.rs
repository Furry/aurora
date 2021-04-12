enum MessageType {
    ChatMessage,
    UserProfile
}

struct ChatMessage {
    username: String,
    content: String,
    group: String,
    admin: bool,
    id: String
}

struct UserProfile {
    avatarUrl: String,
    username: String,
    group: String,
    id: String,

    permissions: u128,

    admin: bool,
    chat: bool,
    beta: bool,
    dev: bool,
}

union PayloadData {
    profile: UserProfile,
    message: ChatMessage
}

struct IncomingMessage {
    which: MessageType,
    data: PayloadData
}