

SELECT cohorts.name as cohort_name, count(*) as student_count
FROM students 
JOIN cohorts 
ON cohorts.id = students.cohort_id
GROUP BY cohorts.name
HAVING count(*) >= 18
ORDER BY student_count ASC; 