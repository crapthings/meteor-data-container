import { composeWithTracker as ComposeDataContainer } from 'react-komposer'

import { map, mapValues, every, isFunction } from 'lodash'

MeteorDataContainer = ({ sources, component, ...options }) => {

  const _data = sources.data
  const _subscriptions = sources.subscriptions

  const Subscribe = !options.cache ? Meteor.subscribe : new SubsManager().subscribe

  function defaultTracker(props, onData) {
    const _loaded = _subscriptions ? map(_subscriptions, (val, key) => Subscribe(key, ...val).ready()) : [true]
    const data = mapValues(_data, (val) => isFunction(val) ? val() : val)
    every(_loaded) && onData(null, data)
  }

  const DataContainer = ComposeDataContainer(defaultTracker)(component)

  return new DataContainer()
}
