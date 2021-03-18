select count(distinct UserName) userCount
from UserActivities
where LoginTime >= NOW() - INTERVAL 10 DAY 