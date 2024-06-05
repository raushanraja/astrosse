import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();

let started = false
let count = 0

function start_counting() {
  if (started) return
  started = true
  setInterval(() => {
    count++
    eventEmitter.emit('count', count)
  }, 1000)
}

function increment() {
  count++
  eventEmitter.emit('count', count)
}

function getCount() {
  return count
}

start_counting()

export { eventEmitter, start_counting, increment, getCount }

