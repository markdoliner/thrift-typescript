export type INT_64 = bigint;
export const metadata: thrift.IServiceMetadata = {
    name: "MyService",
    annotations: {},
    methods: {
        ping: {
            name: "ping",
            annotations: {},
            arguments: [
                {
                    name: "id",
                    fieldId: 1,
                    annotations: {},
                    definitionType: {
                        type: thrift.DefinitionMetadataType.BaseType
                    }
                }
            ]
        }
    }
};
export interface IPing__Args {
    __name: "Ping__Args";
    id: bigint;
}
export interface IPing__ArgsArgs {
    id: number | string | bigint;
}
export const Ping__ArgsCodec: thrift.IStructCodec<IPing__ArgsArgs, IPing__Args> = {
    encode(args: IPing__ArgsArgs, output: thrift.TProtocol): void {
        const obj = {
            id: (typeof args.id === "number" ? BigInt(args.id) : typeof args.id === "string" ? BigInt(args.id) : args.id)
        };
        output.writeStructBegin("Ping__Args");
        if (obj.id != null) {
            output.writeFieldBegin("id", thrift.TType.I64, 1);
            output.writeI64((typeof obj.id === "number" ? BigInt(obj.id) : typeof obj.id === "string" ? BigInt(obj.id) : obj.id));
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[id] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IPing__Args {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.I64) {
                        const value_1: bigint = input.readI64();
                        _args.id = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        if (_args.id !== undefined) {
            return {
                __name: "Ping__Args",
                id: _args.id
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read Ping__Args from input");
        }
    }
};
export class Ping__Args implements thrift.IStructLike, IPing__Args {
    public id: bigint;
    public readonly __name = "Ping__Args";
    constructor(args: IPing__ArgsArgs) {
        if (args.id != null) {
            const value_2: bigint = (typeof args.id === "number" ? BigInt(args.id) : typeof args.id === "string" ? BigInt(args.id) : args.id);
            this.id = value_2;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[id] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): Ping__Args {
        return new Ping__Args(Ping__ArgsCodec.decode(input));
    }
    public static write(args: IPing__ArgsArgs, output: thrift.TProtocol): void {
        return Ping__ArgsCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return Ping__ArgsCodec.encode(this, output);
    }
}
export interface IPing__Result {
    __name: "Ping__Result";
    success?: void;
}
export interface IPing__ResultArgs {
    success?: void;
}
export const Ping__ResultCodec: thrift.IStructCodec<IPing__ResultArgs, IPing__Result> = {
    encode(args: IPing__ResultArgs, output: thrift.TProtocol): void {
        output.writeStructBegin("Ping__Result");
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IPing__Result {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 0:
                    if (fieldType === thrift.TType.VOID) {
                        input.skip(fieldType);
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return {
            __name: "Ping__Result",
            success: _args.success
        };
    }
};
export class Ping__Result implements thrift.IStructLike, IPing__Result {
    public success?: void;
    public readonly __name = "Ping__Result";
    constructor(args: IPing__ResultArgs = {}) {
        if (args.success != null) {
            const value_3: void = undefined;
            this.success = value_3;
        }
    }
    public static read(input: thrift.TProtocol): Ping__Result {
        return new Ping__Result(Ping__ResultCodec.decode(input));
    }
    public static write(args: IPing__ResultArgs, output: thrift.TProtocol): void {
        return Ping__ResultCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return Ping__ResultCodec.encode(this, output);
    }
}
export class Client<Context extends thrift.IRequestContext = thrift.IRequestContext> implements thrift.IThriftClient {
    public static readonly metadata: thrift.IServiceMetadata = metadata;
    public readonly __metadata: thrift.IServiceMetadata = metadata;
    protected _requestId: number;
    protected Transport: thrift.ITransportConstructor;
    protected Protocol: thrift.IProtocolConstructor;
    protected connection: thrift.IThriftConnection<Context>;
    constructor(connection: thrift.IThriftConnection<Context>) {
        this._requestId = 0;
        this.Transport = connection.Transport;
        this.Protocol = connection.Protocol;
        this.connection = connection;
    }
    protected incrementRequestId(): number {
        return this._requestId += 1;
    }
    public ping(id: number | string | bigint, context?: Context): Promise<void> {
        const writer: thrift.TTransport = new this.Transport();
        const output: thrift.TProtocol = new this.Protocol(writer);
        output.writeMessageBegin("ping", thrift.MessageType.CALL, this.incrementRequestId());
        const args: IPing__ArgsArgs = { id };
        Ping__ArgsCodec.encode(args, output);
        output.writeMessageEnd();
        return this.connection.send(writer.flush(), context).then((data: Buffer) => {
            const reader: thrift.TTransport = this.Transport.receiver(data);
            const input: thrift.TProtocol = new this.Protocol(reader);
            try {
                const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
                if (fieldName === "ping") {
                    if (messageType === thrift.MessageType.EXCEPTION) {
                        const err: thrift.TApplicationException = thrift.TApplicationExceptionCodec.decode(input);
                        input.readMessageEnd();
                        return Promise.reject(err);
                    }
                    else {
                        const result: IPing__Result = Ping__ResultCodec.decode(input);
                        input.readMessageEnd();
                        return Promise.resolve(result.success);
                    }
                }
                else {
                    return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.WRONG_METHOD_NAME, "Received a response to an unknown RPC function: " + fieldName));
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
}
export interface IHandler<Context extends object = {}> {
    ping(id: bigint, context: thrift.ThriftContext<Context>): void | Promise<void>;
}
export type ReadRequestData = {
    methodName: "ping";
    requestId: number;
    data: IPing__Args;
};
export class Processor<Context extends object = {}> implements thrift.IThriftProcessor<Context> {
    protected readonly handler: IHandler<Context>;
    public static readonly metadata: thrift.IServiceMetadata = metadata;
    public readonly __metadata: thrift.IServiceMetadata = metadata;
    public readonly Transport: thrift.ITransportConstructor;
    public readonly Protocol: thrift.IProtocolConstructor;
    constructor(handler: IHandler<Context>, Transport: thrift.ITransportConstructor = thrift.BufferedTransport, Protocol: thrift.IProtocolConstructor = thrift.BinaryProtocol) {
        this.handler = handler;
        this.Transport = Transport;
        this.Protocol = Protocol;
    }
    public process(data: Buffer, context: thrift.ThriftContext<Context>): Promise<Buffer> {
        return new Promise<Buffer>((resolve, reject): void => {
            const metadata: ReadRequestData = this.readRequest(data);
            switch (metadata.methodName) {
                case "ping": {
                    resolve(this.process_ping(metadata.data, metadata.requestId, context));
                    break;
                }
                default: {
                    const failed: any = metadata;
                    const errMessage: string = "Unknown function " + failed.methodName;
                    const err: Error = new Error(errMessage);
                    resolve(this.writeError(failed.methodName, failed.requestId, err));
                    break;
                }
            }
        });
    }
    public readRequest(data: Buffer): ReadRequestData {
        const transportWithData: thrift.TTransport = this.Transport.receiver(data);
        const input: thrift.TProtocol = new this.Protocol(transportWithData);
        const metadata: thrift.IThriftMessage = input.readMessageBegin();
        const fieldName: string = metadata.fieldName;
        const requestId: number = metadata.requestId;
        switch (fieldName) {
            case "ping": {
                const data: IPing__Args = Ping__ArgsCodec.decode(input);
                input.readMessageEnd();
                return {
                    methodName: fieldName,
                    requestId: requestId,
                    data: data
                };
            }
            default: {
                input.skip(thrift.TType.STRUCT);
                input.readMessageEnd();
                throw new Error("Unable to read request for unknown function " + fieldName);
            }
        }
    }
    public writeResponse(methodName: string, data: any, requestId: number): Buffer {
        const output: thrift.TProtocol = new this.Protocol(new this.Transport());
        switch (methodName) {
            case "ping": {
                const result: IPing__ResultArgs = { success: data };
                output.writeMessageBegin("ping", thrift.MessageType.REPLY, requestId);
                Ping__ResultCodec.encode(result, output);
                output.writeMessageEnd();
                return output.flush();
            }
            default: {
                throw new Error("Unable to write response for unknown function " + methodName);
            }
        }
    }
    public writeError(methodName: string, requestId: number, err: Error): Buffer {
        const output: thrift.TProtocol = new this.Protocol(new this.Transport());
        const result: thrift.TApplicationException = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin(methodName, thrift.MessageType.EXCEPTION, requestId);
        thrift.TApplicationExceptionCodec.encode(result, output);
        output.writeMessageEnd();
        return output.flush();
    }
    private process_ping(args: IPing__Args, requestId: number, context: thrift.ThriftContext<Context>): Promise<Buffer> {
        return new Promise<void>((resolve, reject): void => {
            try {
                resolve(this.handler.ping(args.id, context));
            }
            catch (err) {
                reject(err);
            }
        }).then((data: void): Buffer => {
            return this.writeResponse("ping", data, requestId);
        }).catch((err: Error): Buffer => {
            return this.writeError("ping", requestId, err);
        });
    }
}
