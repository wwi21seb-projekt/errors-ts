/** GENERATED FILE - DO NOT MODIFY DIRECTLY **/
export class CustomError extends Error {
    code;
    httpStatus;
    constructor(message, code, httpStatus) {
        super(message);
        this.code = code;
        this.httpStatus = httpStatus;
    }
}
export const EndpointNotFound = new CustomError("The endpoint was not found. Please check the endpoint and try again.", "ERR-000", 404);
export const BadRequest = new CustomError("The request body is invalid. Please check the request body and try again.", "ERR-001", 400);
export const UsernameTaken = new CustomError("The username is already taken. Please try another username.", "ERR-002", 409);
export const EmailTaken = new CustomError("The email is already taken. Please try another email.", "ERR-003", 409);
export const UserNotFound = new CustomError("The user was not found. Please check the username and try again.", "ERR-004", 404);
export const UserNotActivated = new CustomError("The user is not activated. Please activate the user and try again.", "ERR-005", 403);
export const ActivationTokenExpired = new CustomError("The token has expired. Please check your mail for a new token and try again.", "ERR-006", 401);
export const InvalidToken = new CustomError("The token is invalid. Please check the token and try again.", "ERR-007", 401);
export const InvalidCredentials = new CustomError("The credentials are invalid. Please check the credentials and try again.", "ERR-008", 404);
export const InternalServerError = new CustomError("An internal server error occurred. Please try again later.", "ERR-009", 500);
export const DatabaseError = new CustomError("A database error occurred. Please try again later.", "ERR-010", 500);
export const EmailUnreachable = new CustomError("The email is unreachable. Please check the email and try again.", "ERR-011", 400);
export const EmailNotSent = new CustomError("The email could not be sent. Please try again later.", "ERR-012", 500);
export const UserAlreadyActivated = new CustomError("The user is already activated. Please login to your account.", "ERR-013", 400);
export const Unauthorized = new CustomError("The request is unauthorized. Please login to your account.", "ERR-014", 208);
export const SubscriptionNotFound = new CustomError("The subscription was not found. Please check the username and try again.", "ERR-015", 404);
export const SubscriptionAlreadyExists = new CustomError("The subscription already exists. Please check the username and try again.", "ERR-016", 409);
export const SubscriptionSelfFollow = new CustomError("You cannot follow yourself. Please check the username and try again.", "ERR-017", 406);
export const UnsubscribeForbidden = new CustomError("You can only delete your own subscriptions.", "ERR-018", 403);
export const DeletePostForbidden = new CustomError("You can only delete your own posts.", "ERR-019", 403);
export const PostNotFound = new CustomError("The post was not found. Please check the post ID and try again.", "ERR-020", 404);
export const AlreadyLiked = new CustomError("You have already liked this post.", "ERR-021", 409);
export const NotLiked = new CustomError("You can't unlike a post you haven't liked.", "ERR-022", 409);
export const NotificationNotFound = new CustomError("The notification was not found. Please check the notification ID and try again.", "ERR-023", 404);
export const DeleteNotificationForbidden = new CustomError("You can only delete your own notifications.", "ERR-024", 403);
export const PasswordResetTokenInvalid = new CustomError("The password reset token is invalid or has expired. Please request a new token and try again.", "ERR-025", 403);
export const ChatAlreadyExists = new CustomError("The chat already exists. Please check the username and try again.", "ERR-026", 409);
export const ChatNotFound = new CustomError("The chat was not found. Please check the chat ID and try again.", "ERR-027", 404);
export const ImageNotFound = new CustomError("The image was not found. Please check the image URL and try again.", "ERR-028", 404);
