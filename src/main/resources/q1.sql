SELECT Count(*) 
FROM Foods f 
join foodcategories fc 
on f.foodcategoryid = fc.CategoryId 
WHERE fc.description = "Soups"; 

