import News from '#models/news'
import Spotlight from '#models/spotlight'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class DataController {
    public async getData({view}: HttpContext) {
        const newsList: News[] = await this.getNews()

        newsList.forEach(news => {
            news.date_formated = `${('0' + news.date.getDate()).slice(-2)}/${('0' + (news.date.getMonth() + 1)).slice(-2)}/${('0' + news.date.getFullYear()).slice(-2)}`
        });

        const spotlightsList: Spotlight[] = await this.getSpotlights()
        return view.render('pages/home', { newsList: newsList, spotlightsList: spotlightsList })
    }

    public async getNews() {
        return db
            .from('news')
            .select('id', 'title', 'date', 'description')
    }

    public async getSpotlights() {
        return db
            .from('spotlights')
            .select('id', 'title', 'date', 'description')
    }
}