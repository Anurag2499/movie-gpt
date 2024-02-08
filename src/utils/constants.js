export const LOGO =
  'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const USER_AVATAR =
  'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png';
// 'https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbwdSFv3QFDRDc0BknR3lQSOf7GFR9V54jw7TWVBwmyoYbTSbFRAi95ZEYeYPr1_7ZBXM4aGr0gv0r4HY4Ma2IEmL9bsUWE.png?r=a16';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODExMTlhNjFmNDA0ZTNhNjcyNGNiMzJlOGQ2MDBhMiIsInN1YiI6IjY1YWZiMmExM2UyZWM4MDBlYmYwOTgyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m3nxGXYcWuPMgq4MB6PyV1GVhhiY5fMQOehXbmja-Oc',
  },
};

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500';

export const BG_URL =
  'https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg';

export const SUPPORTED_LANGUAGES = [
  { id: 'en', name: 'English' },
  { id: 'hindi', name: 'Hindi' },
  { id: 'spanish', name: 'Spanish' },
];

// export const OPENAI_KEY = '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';
// this openai is loggedin via anuragsinghdangi15@gmail.com
export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
// export const OPENAI_KEY = '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';
