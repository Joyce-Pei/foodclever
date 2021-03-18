select FNF.Description
from (select FN.fdcid, F.Description, FN.NutrientID, FN.amount
from FoodNutrients FN join Foods F where FN.Fdcid=f.Fdcid) as FNF
where (Description like "%apple%" and NutrientId =
(select NutrientId from Nutrients where Name like '%Vitamin C%'))
order by Amount desc limit 1 