exports.OPCode = {
  DISPATCH: 0,
  HEARTBEAT: 1,
  ID: 2,
  STATUS_UPDATE: 3,
  VOICE_STATE_UPDATE: 4,
  VOICE_SERVER_PING: 5,
  RESUME: 6,
  RECCONECT: 7,
  REQUEST_GUILD_MEMEBERS: 8,
  INVALID_SESSION: 9,
  HELLO: 10,
  HEARTBEAT_ACK: 11
};

exports.dispatch = {
  READY: "READY",
  CHANNEL_CREATE: "CHANNEL_CREATE",
  CHANNEL_DELETE: "CHANNEL_DELETE",
  CHANNEL_UPDATE: "CHANNEL_UPDATE",
  GUILD_BAN_ADD: "GUILD_BAN_ADD",
  GUILD_BAN_REMOVE: "GUILD_BAN_REMOVE",
  GUILD_CREATE: "GUILD_CREATE",
  GUILD_DELETE: "GUILD_DELETE",
  GUILD_INTEGRATIONS_UPDATE: "GUILD_INTEGRATIONS_UPDATE",
  GUILD_MEMBER_ADD: "GUILD_MEMBER_ADD",
  GUILD_MEMBER_REMOVE: "GUILD_MEMBER_REMOVE",
  GUILD_MEMBER_UPDATE: "GUILD_MEMBER_UPDATE",
  GUILD_ROLE_CREATE: "GUILD_ROLE_CREATE",
  GUILD_ROLE_DELETE: "GUILD_ROLE_DELETE",
  GUILD_ROLE_UPDATE: "GUILD_ROLE_UPDATE",
  GUILD_UPDATE: "GUILD_UPDATE",
  MESSAGE_CREATE: "MESSAGE_CREATE",
  MESSAGE_DELETE: "MESSAGE_DELETE",
  MESSAGE_UPDATE: "MESSAGE_UPDATE",
  PRESENCE_UPDATE: "PRESENCE_UPDATE",
  TYPING_START: "TYPING_START",
  USER_SETTINGS_UPDATE: "USER_SETTINGS_UPDATE",
  VOICE_STATE_UPDATE: "VOICE_STATE_UPDATE"

  
};
