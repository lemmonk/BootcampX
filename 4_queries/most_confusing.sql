SELECT assignments.id as id, assignments.name as name, assignments.day as day, 
assignments.chapter as chapter, count(assistance_requests) as total_request 
FROM assistance_requests
JOIN assignments
ON assignments.id = assistance_requests.assignment_id
GROUP BY assignments.id, assignments.name, assignments.day
ORDER BY total_request DESC;