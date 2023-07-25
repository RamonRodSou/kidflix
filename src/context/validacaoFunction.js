export function isValidName(name) {
    const minLength = 3;
    const maxLength = 15;
    const nameLength = name.trim().length;
    return nameLength >= minLength && nameLength <= maxLength;
  }
  
  export function isValidImageUrl(url) {
    const imageRegex = /\.(jpeg|jpg|gif|png|bmp|webp)$/i;
    return imageRegex.test(url);
  }
  
  export function isValidYouTubeUrl(url) {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+/i;
    return youtubeRegex.test(url);
  }
  