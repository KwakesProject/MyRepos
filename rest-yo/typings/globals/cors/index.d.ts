// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/e05967d76bc9421c25fadb038e902ffda1c8d99a/cors/cors.d.ts
declare module "cors" {
    import express = require('express');

    namespace e {
        interface CorsOptions  {
            origin?: any;
            methods?: any;
            allowedHeaders?: any;
            exposedHeaders?: any;
            credentials?: boolean;
            maxAge?: number;
            preflightContinue?: boolean;
        }
    }

    function e(options?: e.CorsOptions): express.RequestHandler;
    export = e;
}
