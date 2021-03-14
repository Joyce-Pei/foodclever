select  u.gender, nr.name, avg(amount) averageAmount, min(amount) minimumAmount,
 max(amount) maximumAmount, nr.unitname from 
users u 
join recipes r on u.username = r.username
join 
(
	select r.recipeid, n.name, n.nutrientid, n.unitname, sum(fn.amount * rf.amount / 100) amount
	from recipes r 
	join recipefoods rf on r.recipeid = rf.recipeid
	join foods f on rf.fdcid = f.fdcid
	join foodnutrients fn on f.fdcid = fn.fdcid
	join nutrients n on fn.nutrientid = n.nutrientid
	where ((n.unitname = 'KCAL' and n.name = 'Energy') 
		or n.name = 'Sodium, Na'
		or n.name like '%Vitamin C%'
	)	
group by r.recipeid, n.name, n.nutrientid, n.unitname
) nr on r.recipeid = nr.recipeid
group by  u.gender, nr.unitname, nr.nutrientid, nr.name, nr.unitname