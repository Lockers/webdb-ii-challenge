
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        table.increments();
        table.integer('VIN', 128).unique().notNullable();
        table.text('Make', 128).notNullable();
        table.text('Model', 128).notNullable();
        table.integer('Mileage', 128).notNullable();
        table.text('Transmission Type', 64);
        table.text('Status', 128);
  })
};

exports.down = function(knex) {
    return knex.schema.alterTable('cars', table => {
        dropColumns('VIN', 'Make', 'Model', 'Mileage', 'Transmission Type', 'Status')
    })
};
