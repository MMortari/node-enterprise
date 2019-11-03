import express from './app';

const listenPort = process.env.PORT || 3333;
express.listen(listenPort, () => console.log(`Server started on port ${listenPort}`))