const sleep = (sleepDuration) => {
  const now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration);
};

const prepareBigMac = () => {
  setTimeout(() => {
    console.log('1 - Big Mac')});
}
const prepareMilkShake = () => {
  console.log('2 - Milk Shake');
} 

console.log('INÍCIO');

prepareBigMac();
prepareMilkShake();

console.log('FIM');