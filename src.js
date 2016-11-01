import { composeAll, composeWithTracker as ComposeDataContainer } from 'react-komposer'

import { map, mapValues, every, isFunction } from 'lodash'

MeteorDataContainerCache = new SubsManager()

MeteorDataContainer = ({ sources, component, ...options }) => {

  const Subscribe = options.cache ? MeteorDataContainerCache.subscribe.bind(MeteorDataContainerCache) : Meteor.subscribe

  // const _data = sources.data && isFunction(sources.data) ? sources.data() : sources.data
  // const _subscriptions = sources.subscriptions && isFunction(sources.subscriptions) ? sources.subscriptions() : sources.subscriptions

  function defaultTracker(props, onData) {

    // this might cause poor performance

    const _data = sources.data && isFunction(sources.data) ? sources.data() : sources.data
    const _subscriptions = sources.subscriptions && isFunction(sources.subscriptions) ? sources.subscriptions() : sources.subscriptions

    const _loaded = _subscriptions ? map(_subscriptions, (val, key) => {
      const _val = isFunction(val) ? val() : val
      return Subscribe(key, ..._val).ready()
    }) : [true]

    if (every(_loaded)) {
      const data = mapValues(_data, (val) => isFunction(val) ? val() : val)
      onData(null, data)
    }

  }

  const DataContainer = ComposeDataContainer(defaultTracker)(component)

  return new DataContainer()

}
