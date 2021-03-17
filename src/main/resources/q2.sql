select count(distinct UserActivityID)
from UserActivities
where LoginTime >= NOW() - INTERVAL 10 DAY 