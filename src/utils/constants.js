export const LOGIN_BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
export const USER_ICON="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
export const YOUTUBE_URL="https://www.youtube.com/embed/"
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/original/";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_DMDB_API_URL}`
    }
};