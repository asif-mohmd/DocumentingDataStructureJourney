const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, 10000);
});

async function handlePromise() {
    
  console.log("Step 1");

  const data1 = await p1;
  console.log(data1);

  console.log("Testting stage");

  const data2 = await p2;
  console.log(data2);

  console.log("Step 2");
}
handlePromise();
