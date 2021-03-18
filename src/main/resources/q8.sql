select  f.fdcid, f.description, n.name,fn.amount, n.unitname 
from foods f
join FoodNutrients fn on f.fdcid = fn.fdcid
join Nutrients n on n.nutrientid = fn.nutrientid
where Description like "%egg%" and n.Name like "%protein%"
order by fn.amount desc limit 1