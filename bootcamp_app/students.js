const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


const argv = process.argv.splice(2,4);

pool.query(`
SELECT students.id as id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts
ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '${argv[0]}%'
GROUP BY students.id, students.name, cohorts.name
LIMIT ${argv[1]};
`)
.then(res => {
  res.rows.forEach(user => {
   
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
  })
});

