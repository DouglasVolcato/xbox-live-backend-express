import { HttpResponse } from 'src/domain/http/http-response';
import { HttpResponseHandlerInterface } from '../../abstract/handlers/http/http-response-handler-interface';
export declare class HttpResponseHandler implements HttpResponseHandlerInterface {
    private readonly body;
    constructor(body: any);
    ok(): HttpResponse;
    created(): HttpResponse;
    badRequest(): HttpResponse;
    unauthorized(): HttpResponse;
    notFound(): HttpResponse;
}
