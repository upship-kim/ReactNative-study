import EventEmitter3 from 'eventemitter3';

const event = new EventEmitter3();

const refresh = () => event.emit('refresh');
const removePost = (id: string) => event.emit('removePost', id);

const events = {
  event: event,
  refresh: refresh,
  removePost: removePost,
};

export default events;
