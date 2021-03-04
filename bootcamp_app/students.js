const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


const argv = process.argv.splice(2,4);

const queryString = `
SELECT students.id as id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts
ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1
GROUP BY students.id, students.name, cohorts.name
LIMIT $2;
`;

const cohortName = argv[0];
const limit = argv[1];
const values = [`${cohortName}%`, limit];


pool.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
   
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
  })
});

