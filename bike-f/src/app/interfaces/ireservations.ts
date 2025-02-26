export interface IRentals {
  id?:number;//optional
  rental_start:string;
  rental_end:string;
  active_rental?:number;
  bike_name?:string;
  e_bikes_id:number;
  employees_id:number;
  first_name?:string;
  last_name?:string;
  email?:string;
}

/**
 *    "id": 1,
			"rental_start": "2025-02-24 22:24:14",
			"rental_end": "2025-02-26 22:24:14",
			"active_rental": 1,
			"bike_name": "Saepe et sed.",
			"e_bikes_id": 1,
			"employees_id": 1,
			"first_name": "Lorenz",
			"last_name": "Kohler",
			"email": "gbogan@example.org"
 */
