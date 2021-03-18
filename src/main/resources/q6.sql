select
  avg(rate) averageRating,
  x.description
from
  userfoodratings uf
  join(
    select
      f.*,
      fn.amount
    from
      foods f
      join foodnutrients fn on f.fdcid = fn.fdcid
      join nutrients n on n.nutrientid = fn.nutrientid
    where(
        n.name = 'Energy'
        and n.unitname = 'KCAL'
        and fn.amount < 300
      )
  ) x on uf.fdcid = x.fdcid
group by
  x.fdcid,
  x.description
order by
  avg(rate) DESC
limit
  10;