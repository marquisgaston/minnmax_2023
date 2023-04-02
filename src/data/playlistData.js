const sampleData = {
  "kind": "youtube#playlistItemListResponse",
  "etag": "etag_value",
  "nextPageToken": "next_page_token_value",
  "items": [
    // ... Include the first two video objects from the previous response
  ],
  "pageInfo": {
    "totalResults": 23,
    "resultsPerPage": 23
  }
};

// Generate 21 more video objects
for (let i = 3; i <= 23; i++) {
  const randomImageId = Math.floor(Math.random() * 1000);
  sampleData.items.push({
    "kind": "youtube#playlistItem",
    "etag": `etag_value_${i}`,
    "id": `playlist_item_id_${i}`,
    "snippet": {
      "publishedAt": `2022-12-${i}T00:00:00Z`,
      "channelId": "channel_id_value",
      "title": `Video Title ${i}`,
      "description": `Video description ${i}`,
      "thumbnails": {
        "default": {
          "url": `https://picsum.photos/id/${randomImageId}/120/90.jpg`,
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": `https://picsum.photos/id/${randomImageId}/320/180.jpg`,
          "width": 320,
          "height": 180
        },
        "high": {
          "url": `https://picsum.photos/id/${randomImageId}/480/360.jpg`,
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Channel Title",
      "playlistId": "playlist_id_value",
      "position": i - 1,
      "resourceId": {
        "kind": "youtube#video",
        "videoId": `video_id_${i}`
      }
    }
  });
}


module.exports = sampleData;
