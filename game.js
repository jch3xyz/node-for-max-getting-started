const maxApi = require ('max-api');

maxApi.post('Hello from Node!');

maxApi.addHandler('greeting', () => {
    maxApi.post('Got greeting!');
});

let x = 0;
let y = 0;

maxApi.addHandler('input', (dir) => {
    //maxApi.post(`Received from Max ${dir}`);
    if (dir === 'UP'){
        y -= 1;
    } else if (dir === 'DOWN'){
        y += 1;
    } else if (dir === 'LEFT'){
        x -= 1;
    } else if (dir === 'RIGHT'){
        x += 1;
    }
    maxApi.post(`x: ${x}, y: ${y}`);
    maxApi.outlet(x, y);
});