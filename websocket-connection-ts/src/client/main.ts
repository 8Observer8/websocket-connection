
function main()
{
    console.log("hello client");
    const socket = new WebSocket("ws://localhost:3000");
    console.log(socket);
}

main();
