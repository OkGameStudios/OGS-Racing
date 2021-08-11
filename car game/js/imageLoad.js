 var carPick = document.createElement("img")
 var car2Pick = document.createElement("img")
 var trackPicks = []

 var picksToLoad = 0

 function countLoadedImagesAndLaunchIfReady() {
        picksToLoad--
//console.log(picksToLoad)
        if (picksToLoad == 0) {
            imageLoadingDoneSoStartGame()
        }
}
function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLaunchIfReady
    imgVar.src = "images/"+fileName
}

function loadImageForTrackCode(trackCode, fileName) {
    trackPicks[trackCode] = document.createElement("img")
    beginLoadingImage(trackPicks[trackCode], fileName)
}

function loadImages() {
    var imageList = [
        {varName:carPick, theFile: "player1car.png" },
        {varName:car2Pick, theFile: "player2car.png" },

        {trackType:TRACK_ROAD, theFile: "track_road.png" },
        {trackType:TRACK_WALL, theFile: "track_wall.png" },
        {trackType: TRACK_TREE, theFile: "track_tree.png" },
        {trackType: TRACK_GOAL, theFile: "track_goal.png" },
        {trackType: TRACK_FLAG, theFile: "track_flag.png" }
    ]
picksToLoad = imageList.length

for (var i=0; i<imageList.length; i++){
    if(imageList[i].varName != undefined){
    beginLoadingImage(imageList[i].varName, imageList[i].theFile)
}else{
    loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile)
}
}
}
