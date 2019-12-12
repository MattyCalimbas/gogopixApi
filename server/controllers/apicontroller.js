//new security modification requires the use of a .env file 9/22/2019
var Pool = require('pg').Pool
var pool = new Pool({
  user: process.env.AWS_USER,
  host: process.env.AWS_HOST,
  database: process.env.AWS_DB,
  password: process.env.AWS_PASS,
  port: 5432,
})

//modified query below (see: ORDER BY "ID";) 6/26
var getSubjects = (request, response) => {
  pool.query('SELECT * FROM subject ORDER BY "ID";', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// modified query below (see: s."sub_Name") 6/21
var getWallpapers = (request, response) => {
  pool.query('SELECT w.nid, w.s_name, w.s_thumbnail_url, w.s_wallpaper_url, w.s_thumb_s3_key, w.s_wallp_s3_key, w.b_is_premium, w.b_is_active, w.source, w.link_out, w.save_avail, s."sub_Name", s."ID" FROM public.wallpaper w LEFT JOIN public.wallpaper_subject_map m ON w.nid = m.wallpaper_id LEFT JOIN public.subject s ON m.subject_id = s."ID";', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
    getSubjects,
    getWallpapers,
}
