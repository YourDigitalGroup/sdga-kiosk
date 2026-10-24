# SDGA export: golf courses + Hall of Fame

- golf_courses.md / .json: 88 published courses (address, contact, staff, fees, par, tee sets with ratings/slope, video, photo list)
- hall_of_fame.md / .json: 84 inductees by class year (city, gender, bio, championships, video, photo list)
- image_manifest.csv: every photo referenced (type, name, slug, role, attachment_id, filename, source_url)

Notes
- Hall of Fame uses the current `hof_*` fields. Older `details_*` fields are test placeholder data and were ignored.
- Courses: only "published" posts. 25 draft courses were left out. Duplicate tee-set rows were removed.
- Photos are listed by URL only; the image files themselves were not in the developer's zip.
- 11 courses have no tee sets in the database; 1 inductee has no bio; 1 course has no photos.
