ReconnectingWebSocket
=====================

A small JavaScript library that decorates the WebSocket API to provide
a WebSocket connection that will automatically reconnect if the
connection is dropped.

It is API compatible, so when you have:

    ws = new WebSocket('ws://....');

you can replace with:

    ws = new ReconnectingWebSocket('ws://....');

Minified library with gzip compression is less than 600 bytes.

How reconnections occur
-----------------------

With the standard `WebSocket` API, the events you receive from the WebSocket instance are typically:

    onopen
    onmessage
    onmessage
    onmessage
    onclose // At this point the WebSocket instance is dead.

With a `ReconnectingWebSocket`, after an `onclose` event is called it will automatically attempt to reconnect. In addition, a connection is attempted repeatedly (with a small pause) until it succeeds. So the events you receive may look something more like:

    onopen
    onmessage
    onmessage
    onmessage
    onclose
    // ReconnectingWebSocket attempts to reconnect
    onopen
    onmessage
    onmessage
    onmessage
    onclose
    // ReconnectingWebSocket attempts to reconnect
    onopen
    onmessage
    onmessage
    onmessage
    onclose

This is all handled automatically for you by the library.

More
----

Like this? Check out [websocketd](https://github.com/joewalnes/websocketd) for the simplest way to create WebSocket backends from any programming language.

[Follow @joewalnes](https://twitter.com/joewalnes)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/joewalnes/reconnecting-websocket/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

