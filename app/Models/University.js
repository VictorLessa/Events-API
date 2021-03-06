'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class University extends Model {
  events() {
    return this.hasMany('App/Models/Event')
  }
}

module.exports = University
