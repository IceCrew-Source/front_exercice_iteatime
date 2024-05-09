import News from '#models/news'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await News.createMany([
      {
        id: 1,
        title: 'Lancement du prix "as d\'or" de l\'année',
        date: new Date('2023-07-29'),
        description: 'Lorem ipsum dolor sit amet...',
        picture_name: 'cup.png'
      },
      {
        id: 2,
        title: 'gros succes pour "cascadia"',
        date: new Date('2024-02-18'),
        description: 'Lorem ipsum dolor sit amet...',
        picture_name: 'cascadia.png'
      }
    ])
  }
}