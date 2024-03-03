function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  cars.map( cars => {
    if (cars.available === true) {
      result.push(cars)
    } 
  });

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}