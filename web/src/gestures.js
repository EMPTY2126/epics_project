const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;

const rockGesture = new GestureDescription('rock'); 
const paperGesture = new GestureDescription('paper'); 
const scissorsGesture = new GestureDescription('scissors'); 
const dontGesture = new GestureDescription('dont'); 
const indexGesture = new GestureDescription('indexP');
const yesGesture = new GestureDescription('yes');
const fourGesture = new GestureDescription('four');
const threeGesture = new GestureDescription('three');
const loveGesture = new GestureDescription('love');
const superGesture = new GestureDescription('super');
const cGesture = new GestureDescription('c');



// Rock
rockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    rockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    rockGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


// Paper

// no finger should be curled
for(let finger of Finger.all) {
    paperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}


// Scissors

// index and middle finger: stretched out
scissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
scissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring: curled
scissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curled
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);


//indexp
indexGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.5);

for(let finger of [Finger.Thumb,Finger.Middle, Finger.Ring, Finger.Pinky]) {
  indexGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  indexGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

//Yes
yesGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
yesGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
yesGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  yesGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  yesGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

//Four 

fourGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
fourGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
fourGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
fourGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
fourGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
fourGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);

//threeGesture
threeGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
threeGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
threeGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
threeGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
threeGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);
threeGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
threeGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);


//Love

loveGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
loveGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
loveGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
loveGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

for(let finger of [Finger.Middle, Finger.Ring]) {
  loveGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  loveGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

//Super superGesture
superGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
superGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
superGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);


for(let finger of [Finger.Thumb, Finger.Index]) {
  superGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  superGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// Dont 

for(const finger of Finger.all) {

  dontGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  dontGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8);

  dontGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
  dontGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);

  dontGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
  dontGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);

}

//cGesture

cGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
cGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
cGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
cGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
cGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
cGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
cGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
cGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);


const gestures = [
  rockGesture, paperGesture, scissorsGesture, 
  dontGesture,indexGesture,yesGesture,
  fourGesture,threeGesture,loveGesture,
  superGesture,cGesture
]

export {
    gestures
}