# observe [![Build status](https://travis-ci.org/strong-roots-capital/observe.svg?branch=master)](https://travis-ci.org/strong-roots-capital/observe) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/observe.svg)](https://npmjs.org/package/@strong-roots-capital/observe) [![codecov](https://codecov.io/gh/strong-roots-capital/observe/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/observe)

> Observe and react to an EventSource

## Install

``` shell
npm install @strong-roots-capital/observe
```

## Use

``` typescript
import observe from '@strong-roots-capital/observe'
import { EventSource } from '@strong-roots-capital/event-source'

function callback() {
    console.log('In callback')
}

const es = new EventSource()
const observer = observe(es,callback)

es.emit('eventA')
//=> In callback

es.emit('eventB')
//=> In callback

observer.dispose()

es.emit('eventA')
```

## Related

- [event-source](https://github.com/strong-roots-capital/event-source)
- [Observable](https://github.com/strong-roots-capital/observable)

## Acknowledgments

- [Deprecating the Observer Pattern with Scala.React](https://infoscience.epfl.ch/record/176887/files/DeprecatingObservers2012.pdf)
