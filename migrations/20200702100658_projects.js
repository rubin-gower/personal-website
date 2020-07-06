
exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table) {
        table.increments('id').primary()
        table.string('title')
        table.string('description')
        table.string('thumbnail')
        table.string('icon')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('projects');
};