async function downloadVideo() {
  let url = document.getElementById("url").value;
  let result = document.getElementById("result");

  if (!url) {
    result.innerText = "Please paste a link!";
    return;
  }

  result.innerText = "Processing...";

  try {
    let res = await fetch("https://tikwm.com/api/?url=" + encodeURIComponent(url));
    let data = await res.json();

    if (data && data.data && data.data.play) {
      let link = data.data.play;

      result.innerHTML = `
        <p>Download Ready:</p>
        <a href="${link}" target="_blank">Click here to download</a>
      `;
    } else {
      result.innerText = "Video not found!";
    }

  } catch (e) {
    result.innerText = "Error occurred!";
  }
}
