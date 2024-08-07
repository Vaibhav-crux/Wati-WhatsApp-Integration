export const STATUS_CODE = {
    ERROR: 0,
    SUCCESS: 1,
    INVALID_TOKEN: 1000,
  };
  
  export const RESPONSE_STATUS = {
    SUCCESS: 200,
    SUCCESS_CREATED: 201,
    SUCCESS_NO_CONTENT: 204,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHERS: 303,
    NOT_MODIFIED: 304,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 403,
    FORBIDDEN: 401,
    NOT_FOUND: 404,
    NOT_ALLOWED: 405,
    INTERNAL_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    ALREADY_EXISTS: 409,
    PCP_CONSTRAINT: 400,
  };
  export const ERROR_TYPE = {
    NOT_FOUND: "NotFoundError",
    UNAUTHORIZED: "UnauthorizeError",
    INTERNAL_SERVER_ERROR: "InternalServerError",
    BAD_REQUEST: "BadRequestError",
    FORBIDDEN: "ForbiddenError",
    NOT_IMPLEMENTED: "NotImplementedError",
    ALREADY_EXISTS: "AlreadyExistsError",
    NOT_ALLOWED: "MethodNotAllowedError",
    PCP_CONSTRAINT: "PcpConstraintError",
  };
  
  export const PAGINATORS = {
    PAGINATION_START_PAGE: "1",
    PAGINATION_START_MAX_LIMIT: "1000",
    PAGINATION_DEFAULT_ORDER: "ASC",
    ISENABLED_TRUE: "1",
    ISENABLED_FALSE: "0",
    ISACTIVE_TRUE: "1",
    ISACTIVE_FALSE: "0",
  };
  
  export enum CommonStrings {
    SUBJECTS = "One Time Password",
    HTML = "Your One Time Password Is",
    CREATED = "SuccessFully Created",
    UPDATED = "SuccessFully Updated",
    DELETED_SUCCESSFULLY = "Deleted Successfully",
    SUCCESS = "Success",
    SEND_OTP = "SuccessFully Send Otp",
    OTP_VERIFIED = "Otp Verified SuccessFully",
    GENERATE = "GENERATE",
    UPDATE_PASSWORD = "Updating User Password",
    AUTHERIZATION_DENIED = "Autherization Denied",
    PROFILE_UPDATE = "Profile Updated Successfulluy",
    FACEBOOK = "FACEBOOK",
    GOOGLE = "GOOGLE",
    DOCUMENT_UPLOADED = "Document Uploaded Successfully",
    UPGRADE = "",
  }
  
  export enum ErrorCommonStrings {
    INTERNAL_SERVER_ERROR = "Internal server error.",
    BAD_INPUT = "BAD_INPUT",
    BAD_REQUEST = "BAD_REQUEST",
    INVALID_USER = "Invalid User",
    INVALID_PASSWORD = "Invalid Password",
    OLD_PASSWORD = "Old Password Is Wrong",
    UNAUTHORIZED_REQUEST = "UNAUTHORIZED_REQUEST",
    EMAIL_INVALID = "Email Is Invalid",
    USER_NOT_FOUND = "User Not Found",
    INVALID_REQUEST = "Invalid Request",
    UNVERIFIED = "Unverified Email",
    NOT_FOUND = "Not Found",
    NOT_IMPLEMENTED = "Not Implemented",
    ALREADY_EXIST = "Already Exist",
    PLEASE_PROVIDE_ID = "Please provide Id.",
    NOT_AUTHORIZED = "Not Authorized.",
    MISSING_DEVICE = "Missing deviceId in request.",
    DEVICE_NOT_FOUND = "Device not found.",
    DEVICE_ID_REQUIRED = "Device ID is required.",
    DEVICE_ALREADY_EXIST = "Device already registered.",
    NOT_ALLOWED = "MethodNotAllowedError",
    TRANSACTION_FAILED = "transactionFailed",
  }
  
  export enum ValidationStrings {
    IS_REQUIRED = "Is Required",
    MUST_BE_MONGOID = "Must Be A MongoId",
    SHOULD_BE_NUMBER = "Should Be A Number",
    ONLY_ALPHABET_IS_ALLOWED = "Only Alphabet Is Allowed",
    INVALID_EMAIL = "Email Is Invalid",
  }
  
  export const localConstant = {
    INTERNAL_SERVER_ERROR: "Internal server error",
    CHALLENGE_EDIT: "Challenge Edit Successfully",
    CHALLENGE_DELETED: "Challenge Deleted Successfully",
    ALREADY_DELETED: "The field already deleted.",
    ADMIN_NOT_FOUND: "Admin not found",
    ERROR_RATING_COURSE: "Error in rating chapter",
    MISSING_QUERY_PARAMETERS: "Missing query params.",
    ADMIN_NOT_UPDATED: "Admin not updated",
    CHAPTER_PRORGRESS_NOT_FOUND: "Chapter progress not found",
    COURSE_PRORGRESS_NOT_FOUND: "Course progress not found",
    ERROR_FETCHING_XP: "Error in fetching xp",
    ADMIN_NOT_DELETED: "Admin not deleted",
    ERROR_UPDATING_CHAPTERSTATE: "Error in updating chapter state",
    MISSING_REQUIRED_FIELD: "Missing required field:",
    MISSING_REQUEST_BODY: "Missing request body.",
    AIRDROP_EDIT: "Airdrop edited successfully",
    LEADERBOARD_NOT_FOUND: "Leaderboard not found",
    ERROR_FINISHING_QUIZ: "Error in finishing quiz",
    AIRDROP_DELETED: "Airdrop deleted successfully",
    AIRDROP_NOT_FOUND: "No airdrop exists with this airdropId",
    AIRDROP_NOT_EXIST: "No airdrops found",
    PUBLIC_COURSES_NOT_FOUND: "Sorry, there are no public courses present",
    PUBLIC_CHAPTERS_NOT_FOUND: "Sorry, there are no public chapters present for this course",
    NOT_REGISTERED_FOR_AIRDROP: "You are not registered for this airdrop",
    ALREADY_REGISTERED: "You are already registered for this airdrop",
    CREATOR_NOT_FOUND: "No airdrop found for this creatorId",
    BAD_INPUTS: "Missing request params or body keys.",
    USER_EMAIL_ALREADY_EXIST: "User with that email already exists.",
    USER_ALREADY_EXIST: "User already exists.",
    USER_LOGIN: "User login successfully.",
    ADMIN_NOT_CREATED: "Admin not created",
    USER_UPDATED: "User edited successfully.",
    USER_NOT_UPDATED: "User not updated",
    USER_NOT_DELETED: "User not deleted",
    ERROR_QUIZ_SCORING: "Error in quiz scoring",
    COURSE_NOT_FOUND: "Course not found",
    USER_DELETED: "User deleted successfully.",
    USER_UPGRADE: "User upgraded to administrator.",
    ADMIN_CREATED: "Admin created successfully.",
    ADMIN_DELETED: "Admin deleted successfully.",
    ADMIN_ALREADY_EXIST: "Admin already exists.",
    ADMIN_FOUND: "Admin found.",
    USER_FOUND: "User found.",
    COMMUNITY_ALREADY_JOIN: "You have already joined the community",
    ADMIN_UPDATED: "Admin updated.",
    USER_NOT_EXIST: "User not exist.",
    USER_NOT_REGISTERED_FOR_AIRDROP: "User not registered for airdrop",
    USER_NOT_REGISTERED_FOR_COURSE: "User not registered for course",
    DATA_NOT_FOUND: "Data not found.",
    COURSE_PROGRESS_NOT_FOUND: "Course progress not found",
    CHALLENGE_NOT_FOUND: "The challenge not found",
    CHALLENGES_NOT_FOUND: "Challenges not found",
    ALERT_DEVICE: "Active alert detected on your device",
    USER_BANNED: "The user is banned successfully now",
    INVALID_REQUEST: "Invalid request parameters. Either pass airdropId or creatorId",
    INVALID_FIELD: "Invalid fields in query:",
    AIRDROP_LIVE: "Airdrop Admin Service is live",
    AIRDROPID_EMPTY: "The airdropId cannot be empty",
    AIRDROP_STATUS_UPDATED: "The status of airdrop is updated",
    FETCH_DATA_SUCCESSFULLY: "Data fetched successfully",
    ORGANIZATION_CREATED_SUCCESSFULLY: "Organization created successfully",
    TASK_LIVE: "Task Service is live",
    TASK_NOT_FOUND: "Task not found",
    TASK_DELETED: "Task deleted successfully.",
    ERROR_FETCHING_LEADERBOARD: "Error in fetching the leaderboard",
    ERROR_FETCHING_QUIZ: "Error in fetching the airdrop entry level quiz",
    USER_REGISTRATION_FAIL: "Error occurred in registering user",
    ERROR_FETCHING_COMMUNITY: "Error in fetching the communities",
    ERROR_GETTING_TASK: "Error in getting the task",
    ERROR_IN_TASK_STATUS: "Error in checking the task status",
    ERROR_IN_FETCHING_COURSES: "Error in fetching courses",
    NO_QUIZ: "No quiz found",
    ERROR_UPDATING_TASK: "Error while updating task",
    ARTICLE_LIKED: "Article liked",
    ARTICLE_DISLIKED: "Article disliked",
    ERROR_IN_LIKE_THE_ARTICLE: "Error in liking the article",
    ERROR_IN_DISLIKE_THE_ARTICLE: "Error in disliking the article",
    CHAPTER_NOT_FOUND: "Chapter not found",
    ARTICLE_NOT_FOUND: "Article not found",
    BOOKMARK_ARTICLE: "Article bookmarked",
    UNBOOKMARK_ARTICLE: "Article unbookmarked",
    ERROR_BOOKMARK_ARTICLE: "Error in bookmarking the article",
    ERROR_UNBOOKMARK_ARTICLE: "Error in unbookmarking the article",
    ERROR_IN_SENDING_OTP: "Error in sending OTP",
    ERROR_IN_VERIFYING_OTP: "Error in verifying OTP",
    ERROR_IN_CREATING_MAGIC_LINK: "Error in creating magic link",
    ERROR_IN_VERIFYING_MAGIC_LINK: "Error in verifying magic link",
  };
  
  export const ProductConstants = {
    VODAPHONE_PRODUCT_ID: "prod_OvRdGT01cc73xw",
    VERIZON: "prod_P1RfCHGwmAuY3U",
    OTHERS: "prod_OvS4H9rYf921H3",
  };
  