select c.description, c.averageRating, n.name, avg(fn.amount) averageAmount, n.unitname  from foods f 
join foodnutrients fn on f.fdcid = fn.fdcid
join nutrients n on fn.nutrientid = n.nutrientid
join (
select r.categoryid, r.description, r.averageRating from (
	SELECT fc.categoryid, avg(rate) averageRating, fc.description
	FROM UserFoodRatings ufr
	join foods f on f.fdcid = ufr.fdcid
	join foodcategories fc on fc.categoryid = f.foodCategoryid
	group by fc.categoryid
	having avg(rate) >= 60
) r 
join (
	select fc.categoryid, count(uc.fdcid) commentcount
	from usercomments uc
	join foods f on f.fdcid = uc.fdcid
	join foodcategories fc on fc.categoryid = f.foodCategoryid
	group by fc.categoryid
	order by count(fc.categoryid) desc limit 1
) c on r.categoryid = c.categoryid
 )
  c on c.categoryid = f.foodCategoryid
 group by c.description, n.nutrientid, n.name, n.unitname, c.averageRating
order by n.name, n.unitname;