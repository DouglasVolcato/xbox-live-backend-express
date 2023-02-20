import { RequestBodyDto } from 'src/domain/dtos/request-body-dto';
import { HttpRequest } from 'src/domain/http/http-request';
import { HttpRequestHandlerInterface } from '../../abstract/handlers/http/http-request-handler-interface';
export declare class HttpRequestHandler implements HttpRequestHandlerInterface {
    private readonly clientRequest;
    constructor(clientRequest: RequestBodyDto);
    request(): HttpRequest;
}
