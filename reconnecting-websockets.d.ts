// Type definitions for reconnecting-websocket
// Project: https://github.com/joewalnes/reconnecting-websocket
// Definitions by: Drew Noakes <https://drewnoakes.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface OpenEvent extends Event
{
    /** If true, we have reconnected, otherwise this is the initial connection attempt. */
    isReconnect: boolean;
}

/**
 * Behaves as a regular WebSocket class and adds logic for reconnecting when disconnected.
 */
declare class ReconnectingWebSocket
{
    /** Whether all instances of ReconnectingWebSocket should log debug messages. */
    static debugAll: boolean;

    /** Whether this instance should log debug messages. */
    public debug: boolean;

    /** The number of milliseconds to delay before attempting to reconnect. */
    public reconnectInterval: number;

    /** The maximum number of milliseconds to delay a reconnection attempt. */
    public maxReconnectInterval: number;

    /** The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. */
    public reconnectDecay: number;

    /** The number of attempted reconnects since starting, or the last successful connection. */
    public reconnectAttempts: number;

    /** The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. */
    public timeoutInterval: number;

    /** The maximum number of reconnection attempts to make. Unlimited if null. */
    public maxReconnectAttempts?: number;

    /** An event listener to be called when a connection begins being attempted. */
    onconnecting: (ev: Event) => any;

    addEventListener(type: "connecting", listener: (ev: Event) => any, useCapture?: boolean): void;

    /**
     * Additional public API method to refresh the connection if still open (close, re-open).
     * For example, if the app suspects bad data / missed heart beats, it can try to refresh.
     */
    refresh(): void;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    /** The URL as resolved by the constructor. This is always an absolute URL. Read only. */
    public url: string;

    /**
     * A string indicating the name of the sub-protocol the server selected; this will be one of
     * the strings specified in the protocols parameter when creating the WebSocket object.
     * Read only.
     */
    public protocol: string;

    /**
     * The current state of the connection.
     * Can be one of: WebSocket.CONNECTING, WebSocket.OPEN, WebSocket.CLOSING, WebSocket.CLOSED
     * Read only.
     */
    public readyState: number;

    /**
     *
     * @param url the absolute URL of the service, eg: ws://host:port/path
     * @param protocols an optional array of protocol strings
     */
    constructor(url: string, protocols?: string[]);

    /**
     * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
     * this indicates that the connection is ready to send and receive data.
     */
    onopen: (ev: Event) => any;

    /** An event listener to be called when a message is received from the server. */
    onmessage: (ev: any) => any;

    /** An event listener to be called when the WebSocket connection's readyState changes to CLOSED. */
    onclose: (ev: CloseEvent) => any;

    /** An event listener to be called when an error occurs. */
    onerror: (ev: ErrorEvent) => any;

    addEventListener(type: "open", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "message", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "close", listener: (ev: CloseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;

    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
    removeEventListener(name: string, listener: (ev: Event) => any, useCapture?: boolean): void;
    dispatchEvent(event: Event): void;

    /**
     * Transmits data to the server over the WebSocket connection.
     *
     * @param data a text string, ArrayBuffer or Blob to send to the server.
     */
    send(data: any): void;

    /**
     * Closes the WebSocket connection or connection attempt, if any.
     * If the connection is already CLOSED, this method does nothing.
     */
    close(code?: number, reason?: string): void;

    static CONNECTING: number;
    static OPEN: number;
    static CLOSING: number;
    static CLOSED: number;
}
