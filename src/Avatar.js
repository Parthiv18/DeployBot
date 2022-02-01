if (msg.content.toUpperCase() === "-av".toUpperCase()) {
    const UserPFP = msg.member.avatarURL();
        msg.reply(UserPFP);
  }