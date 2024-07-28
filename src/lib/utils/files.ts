export function dataURLtoFile(dataurl: string, filename: string): File {
  // Extract the MIME type and Base64 data from the data URL
  const arr = dataurl.split(",");
  const val = arr[0].match(/:(.*?);/);
  let mime: string;
  if (val) {
    mime = val[1];
  } else {
    mime = "";
  }
  const bstr = atob(arr[1]);

  // Convert the Base64 string to a binary data array
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  // Create a File object
  return new File([u8arr], filename, { type: mime });
}
