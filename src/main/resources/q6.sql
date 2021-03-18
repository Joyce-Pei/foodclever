select
  avg(rate),
  x.description,
  x fdcid
from
  userfoodatings uf
  join(
    select
      f.*,
      fn.amount
    from
      foods f
      join foodnutrients fn on f.fdcid = fn.fdcid
      join foodnutrients n on nutrientid = fn.nutrientid
    where(
        n.name = 'Energy'
        and n.unitname = 'KCAL'
        and fn.amount > 600
      )
  ) x on uf.fdcid = x.fdcid
group by
  x.fdcid,
  x.description
order by
  avg(rate) DESC
limit
  1;