// use serde::{ Deserialize, Serialize };

// #[derive(Serialize, Deserialize, Debug)]
// enum MessageType {
//     ChatMessage,
//     UserProfile
// }

// #[derive(Serialize, Deserialize, Debug)]
// struct ChatMessage {
//     username: String,
//     content: String,
//     group: String,
//     admin: bool,
//     id: String
// }

// #[derive(Serialize, Deserialize, Debug)]
// struct UserProfile {
//     avatarUrl: String,
//     username: String,
//     group: String,
//     id: String,

//     permissions: u128,

//     admin: bool,
//     chat: bool,
//     beta: bool,
//     dev: bool,
// }

// #[serde(untagged)]
// #[derive(Serialize, Deserialize)]
// union PayloadData {
//     profile: UserProfile,
//     message: ChatMessage
// }

// #[derive(Serialize, Deserialize, Debug)]
// struct IncomingMessage {
//     which: MessageType,
//     data: PayloadData
// }