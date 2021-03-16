select UserName, COUNT(*) AS LoginCount 
from useractivities 
GROUP BY UserName 
ORDER BY LoginCount desc 
Limit 10 
