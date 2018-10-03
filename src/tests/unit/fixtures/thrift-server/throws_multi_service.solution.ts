export interface IServiceException {
    message?: string;
}
export interface IServiceExceptionArgs {
    message?: string;
}
export const ServiceExceptionCodec: thrift.IStructCodec<IServiceExceptionArgs, IServiceException> = {
    encode(args: IServiceExceptionArgs, output: thrift.TProtocol): void {
        const obj = {
            message: args.message
        };
        output.writeStructBegin("ServiceException");
        if (obj.message != null) {
            output.writeFieldBegin("message", thrift.TType.STRING, 1);
            output.writeString(obj.message);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IServiceException {
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
                    if (fieldType === thrift.TType.STRING) {
                        const value_1: string = input.readString();
                        _args.message = value_1;
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
            message: _args.message
        };
    }
};
export class ServiceException extends thrift.StructLike implements IServiceException {
    public message?: string;
    constructor(args: IServiceExceptionArgs = {}) {
        super();
        if (args.message != null) {
            const value_2: string = args.message;
            this.message = value_2;
        }
    }
    public static read(input: thrift.TProtocol): ServiceException {
        return new ServiceException(ServiceExceptionCodec.decode(input));
    }
    public static write(args: IServiceExceptionArgs, output: thrift.TProtocol): void {
        return ServiceExceptionCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return ServiceExceptionCodec.encode(this, output);
    }
}
export interface IAuthException {
    message?: string;
    code?: number;
}
export interface IAuthExceptionArgs {
    message?: string;
    code?: number;
}
export const AuthExceptionCodec: thrift.IStructCodec<IAuthExceptionArgs, IAuthException> = {
    encode(args: IAuthExceptionArgs, output: thrift.TProtocol): void {
        const obj = {
            message: args.message,
            code: args.code
        };
        output.writeStructBegin("AuthException");
        if (obj.message != null) {
            output.writeFieldBegin("message", thrift.TType.STRING, 1);
            output.writeString(obj.message);
            output.writeFieldEnd();
        }
        if (obj.code != null) {
            output.writeFieldBegin("code", thrift.TType.I32, 2);
            output.writeI32(obj.code);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IAuthException {
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
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.message = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.I32) {
                        const value_4: number = input.readI32();
                        _args.code = value_4;
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
            message: _args.message,
            code: _args.code
        };
    }
};
export class AuthException extends thrift.StructLike implements IAuthException {
    public message?: string;
    public code?: number;
    constructor(args: IAuthExceptionArgs = {}) {
        super();
        if (args.message != null) {
            const value_5: string = args.message;
            this.message = value_5;
        }
        if (args.code != null) {
            const value_6: number = args.code;
            this.code = value_6;
        }
    }
    public static read(input: thrift.TProtocol): AuthException {
        return new AuthException(AuthExceptionCodec.decode(input));
    }
    public static write(args: IAuthExceptionArgs, output: thrift.TProtocol): void {
        return AuthExceptionCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return AuthExceptionCodec.encode(this, output);
    }
}
export interface IUnknownException {
    message?: string;
}
export interface IUnknownExceptionArgs {
    message?: string;
}
export const UnknownExceptionCodec: thrift.IStructCodec<IUnknownExceptionArgs, IUnknownException> = {
    encode(args: IUnknownExceptionArgs, output: thrift.TProtocol): void {
        const obj = {
            message: args.message
        };
        output.writeStructBegin("UnknownException");
        if (obj.message != null) {
            output.writeFieldBegin("message", thrift.TType.STRING, 1);
            output.writeString(obj.message);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IUnknownException {
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
                    if (fieldType === thrift.TType.STRING) {
                        const value_7: string = input.readString();
                        _args.message = value_7;
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
            message: _args.message
        };
    }
};
export class UnknownException extends thrift.StructLike implements IUnknownException {
    public message?: string;
    constructor(args: IUnknownExceptionArgs = {}) {
        super();
        if (args.message != null) {
            const value_8: string = args.message;
            this.message = value_8;
        }
    }
    public static read(input: thrift.TProtocol): UnknownException {
        return new UnknownException(UnknownExceptionCodec.decode(input));
    }
    public static write(args: IUnknownExceptionArgs, output: thrift.TProtocol): void {
        return UnknownExceptionCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return UnknownExceptionCodec.encode(this, output);
    }
}
export namespace MyService {
    export interface IPegArgs {
        name: string;
    }
    export interface IPegArgsArgs {
        name: string;
    }
    export const PegArgsCodec: thrift.IStructCodec<IPegArgsArgs, IPegArgs> = {
        encode(args: IPegArgsArgs, output: thrift.TProtocol): void {
            const obj = {
                name: args.name
            };
            output.writeStructBegin("PegArgs");
            if (obj.name != null) {
                output.writeFieldBegin("name", thrift.TType.STRING, 1);
                output.writeString(obj.name);
                output.writeFieldEnd();
            }
            else {
                throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[name] is unset!");
            }
            output.writeFieldStop();
            output.writeStructEnd();
            return;
        },
        decode(input: thrift.TProtocol): IPegArgs {
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
                        if (fieldType === thrift.TType.STRING) {
                            const value_9: string = input.readString();
                            _args.name = value_9;
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
            if (_args.name !== undefined) {
                return {
                    name: _args.name
                };
            }
            else {
                throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read PegArgs from input");
            }
        }
    };
    export class PegArgs extends thrift.StructLike implements IPegArgs {
        public name: string;
        constructor(args: IPegArgsArgs) {
            super();
            if (args.name != null) {
                const value_10: string = args.name;
                this.name = value_10;
            }
            else {
                throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[name] is unset!");
            }
        }
        public static read(input: thrift.TProtocol): PegArgs {
            return new PegArgs(PegArgsCodec.decode(input));
        }
        public static write(args: IPegArgsArgs, output: thrift.TProtocol): void {
            return PegArgsCodec.encode(args, output);
        }
        public write(output: thrift.TProtocol): void {
            return PegArgsCodec.encode(this, output);
        }
    }
    export interface IPegResult {
        success?: string;
        exp?: IServiceException;
        authExp?: IAuthException;
        unknownExp?: IUnknownException;
    }
    export interface IPegResultArgs {
        success?: string;
        exp?: IServiceExceptionArgs;
        authExp?: IAuthExceptionArgs;
        unknownExp?: IUnknownExceptionArgs;
    }
    export const PegResultCodec: thrift.IStructCodec<IPegResultArgs, IPegResult> = {
        encode(args: IPegResultArgs, output: thrift.TProtocol): void {
            const obj = {
                success: args.success,
                exp: args.exp,
                authExp: args.authExp,
                unknownExp: args.unknownExp
            };
            output.writeStructBegin("PegResult");
            if (obj.success != null) {
                output.writeFieldBegin("success", thrift.TType.STRING, 0);
                output.writeString(obj.success);
                output.writeFieldEnd();
            }
            if (obj.exp != null) {
                output.writeFieldBegin("exp", thrift.TType.STRUCT, 1);
                ServiceExceptionCodec.encode(obj.exp, output);
                output.writeFieldEnd();
            }
            if (obj.authExp != null) {
                output.writeFieldBegin("authExp", thrift.TType.STRUCT, 2);
                AuthExceptionCodec.encode(obj.authExp, output);
                output.writeFieldEnd();
            }
            if (obj.unknownExp != null) {
                output.writeFieldBegin("unknownExp", thrift.TType.STRUCT, 3);
                UnknownExceptionCodec.encode(obj.unknownExp, output);
                output.writeFieldEnd();
            }
            output.writeFieldStop();
            output.writeStructEnd();
            return;
        },
        decode(input: thrift.TProtocol): IPegResult {
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
                        if (fieldType === thrift.TType.STRING) {
                            const value_11: string = input.readString();
                            _args.success = value_11;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    case 1:
                        if (fieldType === thrift.TType.STRUCT) {
                            const value_12: IServiceException = ServiceExceptionCodec.decode(input);
                            _args.exp = value_12;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    case 2:
                        if (fieldType === thrift.TType.STRUCT) {
                            const value_13: IAuthException = AuthExceptionCodec.decode(input);
                            _args.authExp = value_13;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    case 3:
                        if (fieldType === thrift.TType.STRUCT) {
                            const value_14: IUnknownException = UnknownExceptionCodec.decode(input);
                            _args.unknownExp = value_14;
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
                success: _args.success,
                exp: _args.exp,
                authExp: _args.authExp,
                unknownExp: _args.unknownExp
            };
        }
    };
    export class PegResult extends thrift.StructLike implements IPegResult {
        public success?: string;
        public exp?: IServiceException;
        public authExp?: IAuthException;
        public unknownExp?: IUnknownException;
        constructor(args: IPegResultArgs = {}) {
            super();
            if (args.success != null) {
                const value_15: string = args.success;
                this.success = value_15;
            }
            if (args.exp != null) {
                const value_16: IServiceException = new ServiceException(args.exp);
                this.exp = value_16;
            }
            if (args.authExp != null) {
                const value_17: IAuthException = new AuthException(args.authExp);
                this.authExp = value_17;
            }
            if (args.unknownExp != null) {
                const value_18: IUnknownException = new UnknownException(args.unknownExp);
                this.unknownExp = value_18;
            }
        }
        public static read(input: thrift.TProtocol): PegResult {
            return new PegResult(PegResultCodec.decode(input));
        }
        public static write(args: IPegResultArgs, output: thrift.TProtocol): void {
            return PegResultCodec.encode(args, output);
        }
        public write(output: thrift.TProtocol): void {
            return PegResultCodec.encode(this, output);
        }
    }
    export class Client<Context = any> {
        protected _requestId: number;
        protected transport: thrift.ITransportConstructor;
        protected protocol: thrift.IProtocolConstructor;
        protected connection: thrift.IThriftConnection<Context>;
        constructor(connection: thrift.IThriftConnection<Context>) {
            this._requestId = 0;
            this.transport = connection.Transport;
            this.protocol = connection.Protocol;
            this.connection = connection;
        }
        protected incrementRequestId(): number {
            return this._requestId += 1;
        }
        public peg(name: string, context?: Context): Promise<string> {
            const writer: thrift.TTransport = new this.transport();
            const output: thrift.TProtocol = new this.protocol(writer);
            output.writeMessageBegin("peg", thrift.MessageType.CALL, this.incrementRequestId());
            const args: IPegArgsArgs = { name };
            PegArgsCodec.encode(args, output);
            output.writeMessageEnd();
            return this.connection.send(writer.flush(), context).then((data: Buffer) => {
                const reader: thrift.TTransport = this.transport.receiver(data);
                const input: thrift.TProtocol = new this.protocol(reader);
                try {
                    const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
                    if (fieldName === "peg") {
                        if (messageType === thrift.MessageType.EXCEPTION) {
                            const err: thrift.TApplicationException = thrift.TApplicationExceptionCodec.decode(input);
                            input.readMessageEnd();
                            return Promise.reject(err);
                        }
                        else {
                            const result: IPegResult = PegResultCodec.decode(input);
                            input.readMessageEnd();
                            if (result.exp != null) {
                                return Promise.reject(result.exp);
                            }
                            else if (result.authExp != null) {
                                return Promise.reject(result.authExp);
                            }
                            else if (result.unknownExp != null) {
                                return Promise.reject(result.unknownExp);
                            }
                            else if (result.success != null) {
                                return Promise.resolve(result.success);
                            }
                            else {
                                return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, "peg failed: unknown result"));
                            }
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
    export interface IHandler<Context = any> {
        peg(name: string, context?: Context): string | Promise<string>;
    }
    export class Processor<Context = any> {
        public _handler: IHandler<Context>;
        constructor(handler: IHandler<Context>) {
            this._handler = handler;
        }
        public process(input: thrift.TProtocol, output: thrift.TProtocol, context: Context): Promise<Buffer> {
            return new Promise<Buffer>((resolve, reject): void => {
                const metadata: thrift.IThriftMessage = input.readMessageBegin();
                const fieldName: string = metadata.fieldName;
                const requestId: number = metadata.requestId;
                const methodName: string = "process_" + fieldName;
                switch (methodName) {
                    case "process_peg": {
                        resolve(this.process_peg(requestId, input, output, context));
                        break;
                    }
                    default: {
                        input.skip(thrift.TType.STRUCT);
                        input.readMessageEnd();
                        const errMessage = "Unknown function " + fieldName;
                        const err = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN_METHOD, errMessage);
                        output.writeMessageBegin(fieldName, thrift.MessageType.EXCEPTION, requestId);
                        thrift.TApplicationExceptionCodec.encode(err, output);
                        output.writeMessageEnd();
                        resolve(output.flush());
                        break;
                    }
                }
            });
        }
        public process_peg(requestId: number, input: thrift.TProtocol, output: thrift.TProtocol, context: Context): Promise<Buffer> {
            return new Promise<string>((resolve, reject): void => {
                try {
                    const args: IPegArgs = PegArgsCodec.decode(input);
                    input.readMessageEnd();
                    resolve(this._handler.peg(args.name, context));
                }
                catch (err) {
                    reject(err);
                }
            }).then((data: string): Buffer => {
                const result: IPegResult = { success: data };
                output.writeMessageBegin("peg", thrift.MessageType.REPLY, requestId);
                PegResultCodec.encode(result, output);
                output.writeMessageEnd();
                return output.flush();
            }).catch((err: Error): Buffer => {
                if (err instanceof ServiceException) {
                    const result: IPegResult = { exp: err };
                    output.writeMessageBegin("peg", thrift.MessageType.REPLY, requestId);
                    PegResultCodec.encode(result, output);
                    output.writeMessageEnd();
                    return output.flush();
                }
                else if (err instanceof AuthException) {
                    const result: IPegResult = { authExp: err };
                    output.writeMessageBegin("peg", thrift.MessageType.REPLY, requestId);
                    PegResultCodec.encode(result, output);
                    output.writeMessageEnd();
                    return output.flush();
                }
                else if (err instanceof UnknownException) {
                    const result: IPegResult = { unknownExp: err };
                    output.writeMessageBegin("peg", thrift.MessageType.REPLY, requestId);
                    PegResultCodec.encode(result, output);
                    output.writeMessageEnd();
                    return output.flush();
                }
                else {
                    const result: thrift.TApplicationException = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, err.message);
                    output.writeMessageBegin("peg", thrift.MessageType.EXCEPTION, requestId);
                    thrift.TApplicationExceptionCodec.encode(result, output);
                    output.writeMessageEnd();
                    return output.flush();
                }
            });
        }
    }
}