export const calculateDay = (date) => {
  date = new Date(date);
  const newDate = new Date();
  const Difference_In_Time = newDate.getTime() - date.getTime();

  // To calculate the no. of days between two dates
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  if (Difference_In_Days > 360) {
    return `${(Difference_In_Days / 360).toFixed(0)} years ago`;
  }
  if (Difference_In_Days > 30) {
    return `${(Difference_In_Days / 2).toFixed(0)} months ago`;
  }
  return `${Difference_In_Days.toFixed(0)} days ago`;
};
export const serverTimeToLocalDate = (date, dayPlus) => {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  date = new Date(date);
  if (dayPlus) {
    date.setDate(date.getDate() + dayPlus);
  }
  let day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  let year = date.getFullYear();
  let month = date.getMonth();
  return `${months[month]} ${day} ${year}`;
};

export function fileFromURL(inputURI) {
  if (inputURI == null) {
    return null;
  }
  let localUri = inputURI.uri;
  let filename = localUri.split("/").pop();

  // Infer the type of the image
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  // Upload the image using the fetch and FormData APIs
  let formData = new FormData();
  // Assume "photo" is the name of the form field the server expects
  return { uri: localUri, name: filename, type };
}
export const blobToBase64 = (blob) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise(resolve => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
};
export const dataURItoBlob=async(dataURI)=> {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  const blob = await (await fetch(dataURI)).blob();
  return blob;

}