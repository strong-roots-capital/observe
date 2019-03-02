/**
 * observe
 * Observe and react to an EventSource
 */

namespace debug {
    export const observer = require('debug')('observable')
}

import { EventSource, DEFAULT_EVENT } from '@strong-roots-capital/event-source'


/**
 * Provides a clean-up mechanism.
 */
export interface Observer {
    /**
     * Removes callback on event-emitter.
     */
    dispose: () => void
}

/**
 * Observe specified EventSource.
 *
 * @param eventSource - EventSource to observe
 * @param callback - Callback to invoke on event from `eventSource`
 * @returns Observer of `eventSource`
 */
export default function observe(eventSource: EventSource, callback: any): Observer {
    debug.observer('observing')
    eventSource.on(DEFAULT_EVENT, callback)
    return {
        dispose: () => {
            eventSource.removeListener(DEFAULT_EVENT, callback)
            debug.observer('disposed')
        }
    }
}
