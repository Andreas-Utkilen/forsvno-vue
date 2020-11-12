function filterData(audioBuffer) {
  const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
  const samples = 40; // Number of samples we want to have in our final data set
  const blockSize = Math.floor(rawData.length / samples); // the number of samples in each subdivision
  const filteredData = [];
  for (let i = 0; i < samples; i++) {
    const blockStart = blockSize * i; // the location of the first sample in the block
    let sum = 0;
    for (let j = 0; j < blockSize; j++) {
      sum += Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
    }
    filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
  }
  return filteredData;
}

function normalizeData(filteredData) {
  const multiplier = Math.max(...filteredData) ** -1;
  console.log(multiplier);
  console.timeEnd("Function #1");

  return filteredData.map((n) => n * multiplier);
}

function visualizeAudio(url, audioContext, audioElement) {
  console.time("Function #1");
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => {
        const blob = new Blob([arrayBuffer], { type: "audio/mp3" });
        // eslint-disable-next-line no-param-reassign
        audioElement.src = window.URL.createObjectURL(blob);
        return audioContext.decodeAudioData(arrayBuffer);
      })
      .then((audioBuffer) => {
        resolve(normalizeData(filterData(audioBuffer)));
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = {
  visualizeAudio: visualizeAudio,
  filterData: filterData,
  normalizeData: normalizeData
};
