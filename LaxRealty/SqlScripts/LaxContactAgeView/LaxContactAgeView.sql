create or replace view public."LaxVwContactAgeDays"
as
select "Id" as "LaxId", "Name" as "LaxName", "BirthDate" as "LaxBirthDate",
CURRENT_DATE -"BirthDate" as "LaxAgeDays",
"Id" as "LaxContactId"
from public."Contact"