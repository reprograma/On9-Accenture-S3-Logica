for (let index = 0; index <= 100; index++) {
  console.log("Iteração número " + index);
}

// exemplo continue
for (let index = 0; index < 100; index++) {
  if (index === 17) {
    console.log("Ele não");
    continue;
  }
  console.log("Iteração número " + index);
}

// exemplo break

for (let index = 0; index < 100; index++) {
  if (index === 17) {
    console.log("Ele não");
    break;
  }
}
