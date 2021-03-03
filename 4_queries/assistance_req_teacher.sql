
SELECT count(assistance_requests) as total_assistance, teachers.name as name
FROM assistance_requests
JOIN teachers
ON teachers.id = assistance_requests.teacher_id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.name;