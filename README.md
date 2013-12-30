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

More
----

Like this? Check out [websocketd](https://github.com/joewalnes/websocketd) for the simplest way to create WebSocket backends from any programming language.

[Follow @joewalnes](https://twitter.com/joewalnes)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/joewalnes/reconnecting-websocket/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

