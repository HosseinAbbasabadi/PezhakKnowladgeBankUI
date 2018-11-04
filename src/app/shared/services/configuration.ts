import { environment } from "../../../environments/environment";

export const config = {
    authority: environment.identity_api_url,
    client_id: "KnowladgeBankUi",
    redirect_uri: environment.callback_url,
    response_type: "id_token token",
    scope:"openid profile Forum_Api Notification_Api",
    post_logout_redirect_uri : environment.self_url,
    silent_redirect_uri : environment.callback_url
}

export const ACCESS_TOKEN_NAME = "access_token";