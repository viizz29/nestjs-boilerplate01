import { PROJECT_LOCATION } from './base';
import path, { join } from 'path';

export const RESOURCES_LOCATION = `${PROJECT_LOCATION}/res`;

export const FRONTEND_BUILD_PATH = process.env.FRONTEND_BUILD_PATH
  ? process.env.FRONTEND_BUILD_PATH
  : join(__dirname, '../..', 'public');

export const APP_VERSION = process.env.APP_VERSION
  ? process.env.APP_VERSION
  : '10';
export const APP_DOMAIN = process.env.APP_DOMAIN
  ? process.env.APP_DOMAIN
  : 'http://localhost';
export const PORT = process.env.PORT ? process.env.PORT : '3000';
// export const DOMAIN_WITH_PORT = `${APP_DOMAIN}:${PORT}`;
export const API_BASE_URL = process.env.API_BASE_URL
  ? process.env.API_BASE_URL
  : '';

export const SOCKETIO_ENDPOINT = process.env.SOCKETIO_ENDPOINT
  ? process.env.SOCKETIO_ENDPOINT
  : '';

export const PUBLIC_HOST_WITH_PORT = process.env.PUBLIC_HOST_WITH_PORT
  ? process.env.PUBLIC_HOST_WITH_PORT
  : `http://localhost:${PORT}`;

export const API_CACHE_MAX_DURATION = process.env.API_CACHE_MAX_DURATION
  ? Number(process.env.API_CACHE_MAX_DURATION)
  : 2;

export const CHAT_SERVER_ON = process.env.CHAT_SERVER_ON
  ? process.env.CHAT_SERVER_ON
  : 'false';
export const DOCS_URL = process.env.DOCS_URL ? process.env.DOCS_URL : `/docs`;

export const DB_DATABASE = process.env.DB_DATABASE
  ? process.env.DB_DATABASE
  : 'hie-deployer-dev';
export const DB_USERNAME = process.env.DB_USERNAME
  ? process.env.DB_USERNAME
  : 'postgres';
export const DB_PASSWORD = process.env.DB_PASSWORD
  ? process.env.DB_PASSWORD
  : 'NewPassword';
export const DB_HOST = process.env.DB_HOST ? process.env.DB_HOST : '127.0.0.1';
export const DATABASE_URL = `postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_DATABASE}?schema=public&connection_limit=2`;

export const JWT_SECRET = process.env.JWT_SECRET
  ? process.env.JWT_SECRET
  : 'fsdfdfdsffdsfsdfdsfsdfds';

export const STORAGE_SERVICE_NAME = process.env.STORAGE_SERVICE_NAME
  ? process.env.STORAGE_SERVICE_NAME
  : 'azure';
export const LOCAL_STORAGE_LOCATION = process.env.LOCAL_STORAGE_LOCATION
  ? process.env.LOCAL_STORAGE_LOCATION
  : `${PROJECT_LOCATION}/storage`;
export const TEMP_LOCATION = process.env.TEMP_LOCATION
  ? process.env.TEMP_LOCATION
  : `${LOCAL_STORAGE_LOCATION}/temp`;
export const THUMBNAIL_FILES_LOCATION = `${TEMP_LOCATION}/thumbs`;

export const THUMBNAIL_PLACEHOLDER_FILE = `${RESOURCES_LOCATION}/thumbnail-placeholder.jpg`;
export const THUMBNAIL_PLACEHOLDER_FILE_BASE64 = `${RESOURCES_LOCATION}/thumbnail-placeholder.b64`;

export const LOG_REQUESTS = process.env.LOG_REQUESTS
  ? process.env.LOG_REQUESTS
  : 'false';
export const LOGS_LOCATION = process.env.LOGS_LOCATION
  ? process.env.LOGS_LOCATION
  : `${LOCAL_STORAGE_LOCATION}/logs`;

export const FRONTEND_MODULE_DEPLOYMENT_LOCATION = process.env
  .FRONTEND_MODULE_DEPLOYMENT_LOCATION
  ? process.env.FRONTEND_MODULE_DEPLOYMENT_LOCATION
  : `${path.dirname(PROJECT_LOCATION)}/web/.build`;

console.log({ FRONTEND_MODULE_DEPLOYMENT_LOCATION });

export const MSG91_KEY = process.env.MSG91_KEY ? process.env.MSG91_KEY : '';

export const NO_APIS_OFF_DUE_TO_DEVELOPMENT = process.env
  .NO_APIS_OFF_DUE_TO_DEVELOPMENT
  ? process.env.NO_APIS_OFF_DUE_TO_DEVELOPMENT
  : 'hie-deployer-dev';

export const HASHID_ALPHABET = process.env.HASHID_ALPHABET
  ? process.env.HASHID_ALPHABET
  : 'lkjfsdlfsdlfkjs343423423lkjfsdl23fsdjfkl3flsdjl';

export const SHOW_SQL_QUERIES = process.env.SHOW_SQL_QUERIES
  ? process.env.SHOW_SQL_QUERIES
  : 'false';

export const SHOW_INFO_LOG = process.env.SHOW_INFO_LOG
  ? process.env.SHOW_INFO_LOG == 'true'
  : false;
export const SHOW_ERROR_LOG = process.env.SHOW_ERROR_LOG
  ? process.env.SHOW_ERROR_LOG == 'true'
  : false;

export const THUMBNAIL_SIZE = process.env.THUMBNAIL_SIZE
  ? Number(process.env.THUMBNAIL_SIZE)
  : 512;

export const ENFORCE_SUBSCRIPTIONS = process.env.ENFORCE_SUBSCRIPTIONS
  ? process.env.ENFORCE_SUBSCRIPTIONS == 'true'
  : false;

export const PDF_GENERATION_TIME_SLOT = process.env.PDF_GENERATION_TIME_SLOT
  ? Number(process.env.PDF_GENERATION_TIME_SLOT)
  : 120000;

export const GITHUB_TOKEN = process.env.GITHUB_TOKEN
  ? process.env.GITHUB_TOKEN
  : '...';

export const RUN_TESTS = process.env.RUN_TESTS
  ? process.env.RUN_TESTS === 'true'
  : true;

export const POSTGRES_ADMIN_PASSWORD = process.env.POSTGRES_ADMIN_PASSWORD
  ? process.env.POSTGRES_ADMIN_PASSWORD
  : 'password';

export const FRONTEND_DEPLOYMENT_LOCATION = process.env
  .FRONTEND_DEPLOYMENT_LOCATION
  ? process.env.FRONTEND_DEPLOYMENT_LOCATION
  : '/var/www/magic-web';

export const ENABLE_NOTIFICATION_EMAILS = process.env.ENABLE_NOTIFICATION_EMAILS
  ? process.env.ENABLE_NOTIFICATION_EMAILS === 'true'
  : false;
export const MAIL_SENDING_ID = process.env.MAIL_SENDING_ID
  ? process.env.MAIL_SENDING_ID
  : 'xyz@xyzabc3232.com';
export const MAIL_SENDING_ID_PASSWORD = process.env.MAIL_SENDING_ID_PASSWORD
  ? process.env.MAIL_SENDING_ID_PASSWORD
  : 'password';
export const PROJECT_CONFIGS_LOCATION = `${PROJECT_LOCATION}/project-configs`;

export const DIARY_DEPLOYMENT_LOCATION = process.env.DIARY_DEPLOYMENT_LOCATION
  ? process.env.DIARY_DEPLOYMENT_LOCATION
  : '/var/www/diary';

export const POSTGRES_DATABASE_HOST_NAME = process.env
  .POSTGRES_DATABASE_HOST_NAME
  ? process.env.POSTGRES_DATABASE_HOST_NAME
  : 'localhost';
export const POSTGRES_DATABASE_BACKUP_USER_NAME = process.env
  .POSTGRES_DATABASE_BACKUP_USER_NAME
  ? process.env.POSTGRES_DATABASE_BACKUP_USER_NAME
  : 'user1';
export const POSTGRES_DATABASE_BACKUP_USER_PASSWORD = process.env
  .POSTGRES_DATABASE_BACKUP_USER_PASSWORD
  ? process.env.POSTGRES_DATABASE_BACKUP_USER_PASSWORD
  : '';

export const MYSQL_DB_BACKUP_USER = process.env.MYSQL_DB_BACKUP_USER
  ? process.env.MYSQL_DB_BACKUP_USER
  : '';
export const MYSQL_DB_BACKUP_PASSWORD = process.env.MYSQL_DB_BACKUP_PASSWORD
  ? process.env.MYSQL_DB_BACKUP_PASSWORD
  : '';

export const DATA_BACKUP_SERVER_BASE_URL = process.env
  .DATA_BACKUP_SERVER_BASE_URL
  ? process.env.DATA_BACKUP_SERVER_BASE_URL
  : '';
export const DATA_BACKUP_SERVER_USER_NAME = process.env
  .DATA_BACKUP_SERVER_USER_NAME
  ? process.env.DATA_BACKUP_SERVER_USER_NAME
  : '';
export const DATA_BACKUP_SERVER_PASSWORD = process.env
  .DATA_BACKUP_SERVER_PASSWORD
  ? process.env.DATA_BACKUP_SERVER_PASSWORD
  : '';

export const TTS_API = process.env.TTS_API
  ? process.env.TTS_API
  : `http://localhost:3536/tts/api/speak`;

export const TUNNEL_CLIENT_ON = process.env.TUNNEL_CLIENT_ON === 'true';
export const TUNNEL_CLIENT_TUNNEL_SERVER_PORT = process.env
  .TUNNEL_CLIENT_TUNNEL_SERVER_PORT
  ? process.env.TUNNEL_CLIENT_TUNNEL_SERVER_PORT
  : 1111;
export const TUNNEL_CLIENT_TUNNEL_SERVER_NAME = process.env
  .TUNNEL_CLIENT_TUNNEL_SERVER_NAME
  ? process.env.TUNNEL_CLIENT_TUNNEL_SERVER_NAME
  : 'ws://localhost';
export const TUNNEL_CLIENT_HOST_LIST_FILENAME = process.env
  .TUNNEL_CLIENT_HOST_LIST_FILENAME
  ? process.env.TUNNEL_CLIENT_HOST_LIST_FILENAME
  : 'tunnel-client-hosts.json';

export const THIS_USER = process.env.THIS_USER ? process.env.THIS_USER : 'kali';
export const ANDROID_SDK_LOCATION = process.env.ANDROID_SDK_LOCATION
  ? process.env.ANDROID_SDK_LOCATION
  : '$HOME/android-sdk';

export const WEB_TERMINAL_ON = process.env.WEB_TERMINAL_ON === 'true';

export const TASK_LISTS_FOLDER = process.env.TASK_LISTS_FOLDER
  ? process.env.TASK_LISTS_FOLDER
  : `${PROJECT_LOCATION}/tasks`;

// NGINX/OPENRESTY THINGS
export const NGINX_RESTART_COMMAND = process.env.NGINX_RESTART_COMMAND
  ? process.env.NGINX_RESTART_COMMAND
  : 'sudo systemctl restart openresty';
export const NGINX_CUSTOM_CONFIG_FOLDER = process.env.NGINX_CUSTOM_CONFIG_FOLDER
  ? process.env.NGINX_CUSTOM_CONFIG_FOLDER
  : '/usr/local/openresty/nginx/conf.d';

export const HIE_SERVER_CHECKING_EVERYDAY =
  process.env.HIE_SERVER_CHECKING_EVERYDAY === 'true';

export const BASH_ON_WINDOWS = process.env.BASH_ON_WINDOWS
  ? process.env.BASH_ON_WINDOWS
  : 'C:/Program Files/Git/bin/bash.exe';

export const SCHEDULED_TASKS_ENABLED =
  process.env.SCHEDULED_TASKS_ENABLED === 'true';
