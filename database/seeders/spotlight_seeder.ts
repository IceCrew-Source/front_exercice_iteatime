import Spotlight from '#models/spotlight'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Spotlight.createMany([
      {
        id: 1,
        title: 'expo jeux lyon',
        date: new Date('2016-07-22'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque ex mi, sit amet euismod arcu gravida eget. In tempor orci a pulvinar varius. Suspendisse a consequat tellus. Sed lectus lectus, molestie fringilla tempor at, facilisis sed purus. Aliquam eleifend nibh consectetur purus pulvinar fermentum. Nulla quis volutpat tortor. Phasellus egestas lectus eu massa varius sagittis. Duis sit amet lorem id metus sodales luctus ac sed elit. Quisque elementum rhoncus nisi, at ullamcorper odio vestibulum ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin et sapien et pulvinar. Aliquam vel tristique leo, a iaculis metus. Fusce erat nibh, imperdiet in consequat vestibulum, dictum non elit. Cras vestibulum elit vitae dictum vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec hendrerit neque ac leo scelerisque, in lacinia dolor scelerisque. Nam diam tortor, aliquet tristique nunc eget, efficitur placerat ipsum. Praesent vel tempus orci. Quisque eleifend placerat tellus, in porta nisl scelerisque et. Fusce nulla nibh, pulvinar eu risus in, ornare ornare nunc. Phasellus tempus mi et urna dictum gravida. Vivamus maximus nec velit at egestas. Sed ultrices dictum ex ac laoreet. Duis vitae ultrices nunc. Sed pretium nunc nisl, sit amet accumsan augue volutpat eu. Quisque lobortis luctus nulla, non ultricies orci suscipit sed. Curabitur id fermentum neque. Ut eu porta quam, et auctor turpis. Fusce ante nunc, blandit in feugiat vel, aliquam sit amet nisi. Etiam in lectus porttitor, ultricies sem id, interdum ante. Morbi imperdiet dictum lorem. Phasellus pharetra diam eu faucibus congue. Morbi nec nisi non odio sodales malesuada at a ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus',
        picture_name: 'convention.png'
      }
    ])
  }
}