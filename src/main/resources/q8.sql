select FNF.Description
from (select FN.fdcid, F.Description, FN.NutrientID, FN.amount
from FoodNutrients FN join Foods F where FN.Fdcid=f.Fdcid) as FNF
where (Description like "%milk%" and NutrientId =
(select NutrientId from Nutrients where Name like "%protein%"))
order by Amount desc limit 1 