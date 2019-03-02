import test from 'ava'
import { EventSource, DEFAULT_EVENT } from '@strong-roots-capital/event-source'

/**
 * Library under test
 */

import observe from '../src/observe'

test.cb('callback should be called on observed event', t => {
    const es = new EventSource()
    observe(es, () => t.end())
    es.emit('some-event')
})

test.cb('dispose should prevent observer from observing future events', t => {
    t.plan(1)
    const es = new EventSource()
    const observer = observe(es, () => t.pass())
    es.emit('some-event')
    observer.dispose()
    es.emit('some-event')
    t.end()
})
