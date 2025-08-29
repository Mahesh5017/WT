let seats = 1;
let lock = false;

async function bookSeat(user) {
  await new Promise(res => setTimeout(res, Math.random() * 100));
  if (lock) {
    
    console.log(`${user} failed: System is locked`);
    return;
  }
  
  lock = true;
  if (seats > 0) {
    console.log(`${user} booked the seat `);
    seats--;
  } else {
    console.log(`${user} failed: No seats left`);
  }
  lock = false;
}

async function run() {
  await Promise.all([
    bookSeat("User A"),
    bookSeat("User B"),
    bookSeat("User C")
  ]);
}

run();