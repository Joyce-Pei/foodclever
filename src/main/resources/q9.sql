
select e2.AgeCategory,e2.Description,e2.CommentCount,e1.name,e1.UnitName,e2.Amount
from nutrients e1 inner join
(
    select d1.*,d2.AgeCategory,d2.Description,d2.CommentCount from foodnutrients d1 inner join
    (
        select AgeCategory,z2.Description,z2.fdcId, count(*) as CommentCount from agecategory z1 inner join
        (
            select C1.*,C2.username,round ((DATEDIFF(CURDATE(),c2.DOB))/ 365) as age from foods c1 inner join 
            (
                select b1.*,b2.fdcid from Users b1 inner join
                (
                    select a1.* from usercomments a1 inner join 
                    (
                        select uc.FDCID, Count(*) as cnt
                    from usercomments uc
                    Group by uc.FDCID
                    order by cnt desc
                    limit 10
                    ) a2
                on a1.fdcid=a2.fdcid
                )b2
                on b1.username = b2.username
            )c2
            on c1.fdcid = c2.fdcid
        )z2
        on z2.age between z1.minage and z1.Maxage
        group by AgeCategory,Description , z2.fdcId
        order by AgeCategory,CommentCount desc
    )d2
    on d1.fdcid = d2.fdcid
) e2
on e1.nutrientid = e2.nutrientid
where e1.name like '%Energy%' and e1.UnitName like '%KCAL%'
