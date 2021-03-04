const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


const argv = process.argv.splice(2,3);

const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests
ON teachers.id = assistance_requests.teacher_id
JOIN students
ON assistance_requests.student_id = students.id
JOIN cohorts
ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;
`;

const values = [`${argv[0]}`];

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
   console.log(`${user.cohort}: ${user.teacher}`);
  })
});
