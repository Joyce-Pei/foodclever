select
  username,
  count(username)
from
  usercomments
group by
  username
order by
  count(username) desc
limit
  1