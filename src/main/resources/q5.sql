Select  u.UserName, r.Rate, f.description from UserFoodRatings r
INNER JOIN Users u on u.Gender = 'Male'
inner join foods f on f.fdcid = r.fdcid
