export interface Options {
    automaticOpen?: boolean,
    binaryType?: 'blob' | 'arraybuffer'
    debug?: boolean,
    maxReconnectAttempts?: number | null
    maxReconnectInterval?: number,
    reconnectDecay?: number,
    reconnectInterval?: number,
    timeoutInterval?: number,
}

export default class ReconnectingWebSocket {
    constructor(url: string, protocols: string[], options: Options);

    static debugAll: boolean;

    onclose: (event: any) => void;
    onconnecting: (event: any) => void;
    onerror: (event: any) => void;
    onmessage: (event: any) => void;
    onopen: (event: any) => void;

    close(code?: number, reason?: string): void;
    open(reconnectAttempt?: boolean): void;
    refresh(): void;
    send(data: any): void;

    maxReconnectAttempts: number;
    protocol: string;
    readyState: number;
    reconnectAttempts: number;
    url: string;
}
