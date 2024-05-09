import Spotlight from '#models/spotlight'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Spotlight.createMany([
      {
        id: 1,
        title: 'expo jeux lyon',
        date: new Date('2016-07-22'),
        description: 'Lorem ipsum dolor sit amet',
        picture_name: 'convention.png'
      }
    ])
  }
}