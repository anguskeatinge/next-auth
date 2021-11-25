import type { InternalOptions } from "../../../lib/types";
import type { IncomingRequest } from "../..";
import type { Cookie } from "../cookie";
/**
 *
 * Generates an authorization/request token URL.
 *
 * [OAuth 2](https://www.oauth.com/oauth2-servers/authorization/the-authorization-request/) | [OAuth 1](https://oauth.net/core/1.0a/#auth_step2)
 */
export default function getAuthorizationUrl(params: {
    options: InternalOptions<"oauth">;
    query: IncomingRequest["query"];
}): Promise<{
    redirect: string;
    cookies?: undefined;
} | {
    redirect: string;
    cookies: Cookie[];
}>;
