import { Edge } from 'edge.js' // Changed this
import env from '#start/env'
import { edgeIconify, addCollection } from 'edge-iconify'
import { icons as ph } from '@iconify-json/ph'

/**
 * Add phosphore collection
 */
addCollection(ph)

// Added this one also
const edge = Edge.create()

/**
 * Register a plugin
 */
edge.use(edgeIconify)

/**
 * Define a global property
 */
edge.global('appUrl', env.get('APP_URL'))