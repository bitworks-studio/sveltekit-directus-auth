# SvelteKit & Directus authentication example

Client side authenitication and login 

## Running the project
create .env file from .env.example

```bash
npm install

npm run dev -- --open
```

## Local development
Maybe you will also need to set these (in Directus Config) for localhost testing:
REFRESH_TOKEN_COOKIE_SECURE = false // if you are on http only (not https)
REFRESH_TOKEN_COOKIE_SAME_SITE = none // if you are on different domain

