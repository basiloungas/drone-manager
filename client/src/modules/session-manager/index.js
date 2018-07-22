import io from 'socket.io-client';

class SessionManager {
  constructor(config = {}) {
    //TODO: get this from env params
    this.url = config.url;
    this.eventsList = config.eventsList || {};

    this.establishConnection();
    this.listentToEvents();
  }

  establishConnection() {
    this.io = io(this.url);
  }

  listentToEvents() {
    Object
      .entries(this.eventsList)
      .forEach(([eventName, cb]) => {
        this.io.on(eventName, cb)
      });
  }
}

export default SessionManager;