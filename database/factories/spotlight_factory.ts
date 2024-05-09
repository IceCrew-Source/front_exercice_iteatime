import factory from '@adonisjs/lucid/factories'
import Spotlight from '#models/spotlight'

export const SpotlightFactory = factory
  .define(Spotlight, async ({ faker }) => {
    return {}
  })
  .build()