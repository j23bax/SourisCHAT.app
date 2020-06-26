- Users

- Servers
  - Owner
  - Mods
  - Clients
  - Invites
  - Channels
    - Is Mod Only Read / Write
    - Is Mod Only Write
    - Messages

---

- Server
  - owner_id -> User
- Server Mods
  - server_id -> Server
  - user_id -> User
- Server Member
  - server_id -> Server
  - user_id -> User
- Server Users
  - server_id -> Server
  - user_id -> User
- Server Invites
  - server_id -> Server
  - landing_uid: string
- Server Channels
  - server_id -> Server
  - mod_only: boolean
  - read_only: boolean
- Messages
  - server_id -> Server
  - channel_id -> Channel
  - sender_id -> User

## TODO LATER:

* Voice Chat
* Emoji Reactions on Messages
* User Mentions on Messages
* Bot Accounts / Automation
* Direct Messages
* Friend List
* Image Upload - i would recommend any other api service for uploading/storing images