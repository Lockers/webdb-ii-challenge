
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 88899633, Make: 'Ford', Model: 'Fiesta', Mileage: 100 },
        { VIN: 88829633, Make: 'Ford', Model: 'Focus', Mileage: 2000 },
        { VIN: 88339633, Make: 'Ford', Model: 'Fusion', Mileage: 26000 },
        { VIN: 86589963, Make: 'Ford', Model: 'Mondeo', Mileage: 250000 },
        { VIN: 88589963, Make: 'Ford', Model: 'C Max', Mileage: 230000 },
        { VIN: 87299633, Make: 'Ford', Model: 'Galaxy', Mileage: 4000 },
      ]);
    });
};
