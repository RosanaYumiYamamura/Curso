let jsonData = `
  [
  {"info":{"count":826,"pages":42,"next":"https://rickandmortyapi.com/api/character?page=7","prev":"https://rickandmortyapi.com/api/character?page=5"},"results":[{"id":101,"name":"E. Coli","status":"Dead","species":"Disease","type":"","gender":"unknown","origin":{"name":"Anatomy Park","url":"https://rickandmortyapi.com/api/location/5"},"location":{"name":"Anatomy Park","url":"https://rickandmortyapi.com/api/location/5"},"image":"https://rickandmortyapi.com/api/character/avatar/101.jpeg","episode":["https://rickandmortyapi.com/api/episode/3"],"url":"https://rickandmortyapi.com/api/character/101","created":"2017-12-01T12:03:31.433Z"},{"id":102,"name":"Donna Gueterman","status":"Dead","species":"Robot","type":"","gender":"Female","origin":{"name":"unknown","url":""},"location":{"name":"Planet Squanch","url":"https://rickandmortyapi.com/api/location/35"},"image":"https://rickandmortyapi.com/api/character/avatar/102.jpeg","episode":["https://rickandmortyapi.com/api/episode/21"],"url":"https://rickandmortyapi.com/api/character/102","created":"2017-12-01T12:21:21.357Z"},{"id":103,"name":"Doofus Rick","status":"unknown","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (J19ζ7)","url":"https://rickandmortyapi.com/api/location/31"},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/103.jpeg","episode":["https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/22"],"url":"https://rickandmortyapi.com/api/character/103","created":"2017-12-01T12:29:27.984Z"},{"id":104,"name":"Doom-Nomitron","status":"Dead","species":"Alien","type":"Shapeshifter","gender":"unknown","origin":{"name":"unknown","url":""},"location":{"name":"Dorian 5","url":"https://rickandmortyapi.com/api/location/29"},"image":"https://rickandmortyapi.com/api/character/avatar/104.jpeg","episode":["https://rickandmortyapi.com/api/episode/25"],"url":"https://rickandmortyapi.com/api/character/104","created":"2017-12-26T12:34:36.758Z"},{"id":105,"name":"Dr. Glip-Glop","status":"Dead","species":"Alien","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"St. Gloopy Noops Hospital","url":"https://rickandmortyapi.com/api/location/16"},"image":"https://rickandmortyapi.com/api/character/avatar/105.jpeg","episode":["https://rickandmortyapi.com/api/episode/19"],"url":"https://rickandmortyapi.com/api/character/105","created":"2017-12-26T12:39:22.855Z"},{"id":106,"name":"Dr. Schmidt","status":"unknown","species":"Human","type":"Game","gender":"Male","origin":{"name":"Roy: A Life Well Lived","url":"https://rickandmortyapi.com/api/location/32"},"location":{"name":"Roy: A Life Well Lived","url":"https://rickandmortyapi.com/api/location/32"},"image":"https://rickandmortyapi.com/api/character/avatar/106.jpeg","episode":["https://rickandmortyapi.com/api/episode/13"],"url":"https://rickandmortyapi.com/api/character/106","created":"2017-12-26T12:46:48.805Z"},{"id":107,"name":"Dr. Wong","status":"Alive","species":"Human","type":"","gender":"Female","origin":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/107.jpeg","episode":["https://rickandmortyapi.com/api/episode/24","https://rickandmortyapi.com/api/episode/41"],"url":"https://rickandmortyapi.com/api/character/107","created":"2017-12-26T12:55:58.449Z"},{"id":108,"name":"Dr. Xenon Bloom","status":"Dead","species":"Humanoid","type":"Amoeba-Person","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Anatomy Park","url":"https://rickandmortyapi.com/api/location/5"},"image":"https://rickandmortyapi.com/api/character/avatar/108.jpeg","episode":["https://rickandmortyapi.com/api/episode/3"],"url":"https://rickandmortyapi.com/api/character/108","created":"2017-12-26T13:14:12.157Z"},{"id":109,"name":"Duck With Muscles","status":"Dead","species":"Alien","type":"Parasite","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/109.jpeg","episode":["https://rickandmortyapi.com/api/episode/15"],"url":"https://rickandmortyapi.com/api/character/109","created":"2017-12-26T13:17:40.686Z"},{"id":110,"name":"Eli","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"Post-Apocalyptic Earth","url":"https://rickandmortyapi.com/api/location/8"},"location":{"name":"Post-Apocalyptic Earth","url":"https://rickandmortyapi.com/api/location/8"},"image":"https://rickandmortyapi.com/api/character/avatar/110.jpeg","episode":["https://rickandmortyapi.com/api/episode/23"],"url":"https://rickandmortyapi.com/api/character/110","created":"2017-12-26T13:37:27.635Z"},{"id":111,"name":"Eli's Girlfriend","status":"Alive","species":"Human","type":"","gender":"Female","origin":{"name":"Post-Apocalyptic Earth","url":"https://rickandmortyapi.com/api/location/8"},"location":{"name":"Post-Apocalyptic Earth","url":"https://rickandmortyapi.com/api/location/8"},"image":"https://rickandmortyapi.com/api/character/avatar/111.jpeg","episode":["https://rickandmortyapi.com/api/episode/23"],"url":"https://rickandmortyapi.com/api/character/111","created":"2017-12-26T13:38:47.115Z"},{"id":112,"name":"Eric McMan","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"location":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"image":"https://rickandmortyapi.com/api/character/avatar/112.jpeg","episode":["https://rickandmortyapi.com/api/episode/3"],"url":"https://rickandmortyapi.com/api/character/112","created":"2017-12-26T13:40:06.005Z"},{"id":113,"name":"Eric Stoltz Mask Morty","status":"unknown","species":"Human","type":"","gender":"Male","origin":{"name":"Eric Stoltz Mask Earth","url":"https://rickandmortyapi.com/api/location/33"},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/113.jpeg","episode":["https://rickandmortyapi.com/api/episode/10"],"url":"https://rickandmortyapi.com/api/character/113","created":"2017-12-26T13:43:29.296Z"},{"id":114,"name":"Ethan","status":"unknown","species":"Human","type":"Cronenberg","gender":"Male","origin":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"location":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"image":"https://rickandmortyapi.com/api/character/avatar/114.jpeg","episode":["https://rickandmortyapi.com/api/episode/3"],"url":"https://rickandmortyapi.com/api/character/114","created":"2017-12-26T16:01:13.904Z"},{"id":115,"name":"Ethan","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/115.jpeg","episode":["https://rickandmortyapi.com/api/episode/16","https://rickandmortyapi.com/api/episode/26"],"url":"https://rickandmortyapi.com/api/character/115","created":"2017-12-26T16:01:50.939Z"},{"id":116,"name":"Evil Beth Clone","status":"Dead","species":"Human","type":"Clone","gender":"Female","origin":{"name":"unknown","url":""},"location":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"image":"https://rickandmortyapi.com/api/character/avatar/116.jpeg","episode":["https://rickandmortyapi.com/api/episode/5"],"url":"https://rickandmortyapi.com/api/character/116","created":"2017-12-26T16:10:47.781Z"},{"id":117,"name":"Evil Jerry Clone","status":"Dead","species":"Human","type":"Clone","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"image":"https://rickandmortyapi.com/api/character/avatar/117.jpeg","episode":["https://rickandmortyapi.com/api/episode/5"],"url":"https://rickandmortyapi.com/api/character/117","created":"2017-12-26T16:11:15.395Z"},{"id":118,"name":"Evil Morty","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/118.jpeg","episode":["https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/28","https://rickandmortyapi.com/api/episode/51"],"url":"https://rickandmortyapi.com/api/character/118","created":"2017-12-26T16:13:41.103Z"},{"id":119,"name":"Evil Rick","status":"Dead","species":"Humanoid","type":"Robot","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/119.jpeg","episode":["https://rickandmortyapi.com/api/episode/10"],"url":"https://rickandmortyapi.com/api/character/119","created":"2017-12-26T16:17:16.472Z"},{"id":120,"name":"Evil Summer Clone","status":"Dead","species":"Human","type":"Clone","gender":"Female","origin":{"name":"unknown","url":""},"location":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"image":"https://rickandmortyapi.com/api/character/avatar/120.jpeg","episode":["https://rickandmortyapi.com/api/episode/5"],"url":"https://rickandmortyapi.com/api/character/120","created":"2017-12-26T16:24:02.059Z"}
]}`;

console.log()

//const readyData = JSON.parse(jsonData);
//const coApi = document.getElementById("coApi");
//for(let pr of readyData){
  //const card = document.createElement("article")
 // const cardContent = `
  //<h1>${pr.title}</h1>
  //<img src=${pr.image} alt=${pr.title} />
  //<p>${pr.description}</p>
  //<p>${pr.price}</p>

  //`;
 // card.innerHTML = cardContent;
  //coApi.appendChild(card)
//}

